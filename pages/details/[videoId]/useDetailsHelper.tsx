"use client";
import { useEffect, useState } from 'react';
import moment from 'moment';
import httpService from '@/services/http.service';
import { VideoDetailAPIResponse, VideoDetailsInterface } from '@/interfaces/videoDetails.interface';
import { API_END_POINTS } from '@/constants/api-endPoints';

interface Video {
  name: string;
  description: string;
  duration: number;
  sources: { src: string; type: string }[];
  poster: string;
  thumbnail: { srcset: string; type: string; media?: string }[];
  contentId: string;
}

const useVideoDetails = (videoId: string): VideoDetailsInterface[] => {
  const [videoData, setVideoData] = useState<VideoDetailsInterface[]>([]);

  const backgroundImage =
  "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const payloadReceived: any = await httpService.get(`${API_END_POINTS.GET_VIDEO_DETAILS}${videoId}`);

        const content: VideoDetailAPIResponse = payloadReceived.result;

        const videoObj: VideoDetailsInterface = {
          name: content?.title || '',
          description: content?.description || '',
          duration: moment.duration(content?.duration).asSeconds() || 0,
          sources: [{ src: content?.playList.hls.url || '', type: content.playList.hls.type }],
          poster: content?.banners[0]?.path || backgroundImage,
          imdbRating: content.imdb,
          year: content.year,
          discretionCertificate: content.discretion,
          categories: content.categories,
          genres: content.genres,
          subtitles: content.subtitles,
          thumbnail: [
            {
              srcset: content.thumbnails[0]?.path || '',
              type: 'image/png',
              media: '(min-width: 400px)',
            },
            {
              srcset: content.banners[0]?.path,
              type: 'image/png',
            },
          ],
          contentId: content?.id || '',
        };

        setVideoData([videoObj]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, [videoId]);

  return videoData;
};

export default useVideoDetails;




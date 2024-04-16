"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import playerHandler from "./useDetailsHelper";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import styles from "./details.module.scss";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Skeleton, Tooltip, Typography } from "@mui/material";
import { VideoDetailsInterface } from "@/interfaces/videoDetails.interface";
import {
  ConvertSecondsToHoursAndMinutes,
  FormatCategory,
} from "@/services/utility.service";
import { CATEGORY } from "@/constants/const";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VideoDetailsPage from "@/shared/components/video-details";
import usePlayerHandler from "./useDetailsHelper";
import httpService from "@/services/http.service";
import AddIcon from "@mui/icons-material/Add";
import useVideoDetails from "./useDetailsHelper";
import { Category } from "@/interfaces/homePage.interface";

const Details: React.FC = ({}) => {
  const params = useParams();
  const router = useRouter();
  const videoId: any = params?.videoId;

  // let { playList, handlePlayerReady } = playerHandler();

  // const playList = usePlayerHandler();
  const videoDetail = useVideoDetails(videoId);

  const [videoItem, setVideoItem] = useState<VideoDetailsInterface>();
  const [player, setPlayer] = useState<boolean>(false);
  const [duration, setDuration] = useState<any>(null);
  const [category, setCategory] = useState<string>();

  const backgroundImage =
    "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    if (videoDetail && videoDetail.length > 0) {
      setVideoItem(videoDetail[0]);
    }
  }, [videoDetail, videoId]);

  useEffect(() => {
    if (videoItem) {
      document.title = videoItem.name || "Title";
      setDuration(ConvertSecondsToHoursAndMinutes(videoItem.duration || 0));
      // setCategory(FormatCategory(CATEGORY));
    }
  }, [videoItem, duration]);

  const handlePlayer = () => {
    setPlayer(true);
  };

  const handleClose = () => {
    setPlayer(false);
  };

  const toCategoryDetailPage = (category: Category) => {
    const queryParams = { filterName: category.name, type: 'genre' };
    const queryString = new URLSearchParams(queryParams).toString();
    const route = `/filter/${category._id}?${queryString}`;
    router.push(route);
  };

  return (
    <>
      {!player ? (
        <>
          {videoItem ? (
            <>
              {/* <VideoDetailsPage videoItemDetails={videoItem} /> */}
              <div
                // className={styles.bannerContainer}
                // style={{ backgroundImage: `url(${videoItem.poster})` }}
                style={{
                  backgroundImage: `linear-gradient(to right, black 20%,
                    rgba(255, 255, 255, 0)
                    ), url(${videoItem.poster})`,
                  width: `100%`,
                  height: `800px`,
                  backgroundSize: `100% 100%`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></div>

              <div className={styles.bannerDetails}>
                <h1>{videoItem?.name}</h1>
                <Typography className={styles.description}>
                  {videoItem?.description?.slice(0, 350)}
                </Typography>

                <div className={styles.videoInfo}>
                  <p>Rating {videoItem.imdbRating}</p>
                  <p>{duration}</p>
                  <p>{videoItem.year}</p>
                  <p>{videoItem.discretionCertificate}</p>
                </div>
                <div className={styles.category}>
                  {videoItem.genres?.map((category) => (
                    <Typography
                      key={category._id}
                      onClick={() => toCategoryDetailPage(category)}
                    >
                      {category.name}
                    </Typography>
                  ))}
                </div>
                <div className={styles.playContainer}>
                  <div className={styles.play}>
                    <PlayCircleFilledWhiteOutlinedIcon
                      className={styles.play_button}
                      onClick={handlePlayer}
                    />
                    <h2>Play</h2>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Tooltip title="Add to Watchlist">
                      <AddIcon className={styles.buttonList}></AddIcon>
                    </Tooltip>
                    {/* <Tooltip title="Like">
                      <ThumbUpOutlinedIcon
                        className={styles.buttonList}
                      ></ThumbUpOutlinedIcon>
                    </Tooltip>
                    <Tooltip title="Dislike">
                      <ThumbDownOffAltOutlinedIcon
                        className={styles.buttonList}
                      ></ThumbDownOffAltOutlinedIcon>
                    </Tooltip>
                    <Tooltip title="Share">
                      <ShareOutlinedIcon
                        className={styles.buttonList}
                      ></ShareOutlinedIcon>
                    </Tooltip> */}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                height={800}
              />
            </>
          )}
        </>
      ) : (
        <>
          {/* <div className={styles.closePlayer}>
            <Tooltip title="Close Player">
              <CancelOutlinedIcon
                className={styles.closeButton}
                onClick={handleClose}
              />
            </Tooltip>
          </div>
          <Box className={styles.videoContainer}>
            <VideoPlayer
              options={options}
              source={[videoItem]}
              // onReady={handlePlayerReady}
            />
          </Box> */}
        </>
      )}
    </>
  );
};

export default Details;

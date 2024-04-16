"use client"
import React, { useEffect, useRef, useState } from "react";
import { VideoDetailsInterface } from "@/interfaces/videoDetails.interface";
import styles from "./video-details.module.scss"
import { Tooltip, Typography } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { ConvertSecondsToHoursAndMinutes, FormatCategory } from "@/services/utility.service";
import { CATEGORY } from "@/constants/const";


interface VideoDetailsProps {
  videoItemDetails: VideoDetailsInterface
}


const VideoDetailsPage: React.FC<VideoDetailsProps> = ({videoItemDetails}) => {

  const [duration, setDuration] = useState<any>(null);
  const [category, setCategory] = useState<string>();
  
  const backgroundImage =
  "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    if (videoItemDetails) {
      document.title = videoItemDetails.name || 'Title'
      setDuration(ConvertSecondsToHoursAndMinutes(videoItemDetails?.duration || 0));
      setCategory(FormatCategory(CATEGORY));
    }
  });

  return (
    <>
      <div
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${videoItemDetails.poster})` }}
      ></div>

      <div className={styles.bannerDetails}>
        <h1>{videoItemDetails?.name}</h1>
        <Typography className={styles.description}>
          {videoItemDetails?.description?.slice(0, 350)}
        </Typography>

        <div className={styles.videoInfo}>
          <p>IMDb 7.0</p>
          <p>{duration}</p>
          <p>2022</p>
          <p>U/A 13+</p>
        </div>
        <div className={styles.category}>
          <p>{category}</p>
        </div>
        <div className={styles.playContainer}>
          <div className={styles.play}>
            <PlayCircleFilledWhiteOutlinedIcon
              className={styles.play_button}
              // onClick={handlePlayer}
            />
            <h2>Play</h2>
          </div>
          <div className={styles.buttonsContainer}>
            <Tooltip title="Like">
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
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailsPage;

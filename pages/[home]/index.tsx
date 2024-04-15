"use client";
import { HomePageCategoryWiseInterface } from "@/interfaces/homePage.interface";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import useHomeAPICall from "./useHomeHelper";
import { Container } from "@mui/material";

export const CardsContext = createContext<HomePageCategoryWiseInterface[]>([]);

const HomePage: React.FC = () => {
  const [videoPlayList, setVideoPlayList] = useState<HomePageCategoryWiseInterface[]>([]);
  const [homeData] = useHomeAPICall();

  useEffect(() => {
    if (homeData) {
      setVideoPlayList(homeData);
    }
  }, [homeData]);

  return (
    <>
      {videoPlayList && videoPlayList.length > 0 ? (
        <>
          {videoPlayList.map((category) => (
            <div key={category.categoryId}>
              <h1>{category.categoryName}</h1>
              {category.videoList.map((video) => (
                <div key={video.id}>
                  <h2>Title of video: {video.name}</h2>
                  <p>Description: {video.description}</p>
                  {/* Add other video details as needed */}
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>Loading . . . </h1>
        </>
      )}
    </>
  );
};
export default HomePage;

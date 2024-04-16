"use client";
import { HomePageCategoryWiseInterface } from "@/interfaces/homePage.interface";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import useHomeAPICall from "./useHomeHelper";
import { Container, Skeleton } from "@mui/material";
import styles from "./home.module.scss";
import CardsListing from "@/shared/components/cardsList";

export const CardsContext = createContext<HomePageCategoryWiseInterface[]>([]);

const HomePage: React.FC = () => {
  const [videoPlayList, setVideoPlayList] = useState<
    HomePageCategoryWiseInterface[]
  >([]);
  const [homeData] = useHomeAPICall();

  useEffect(() => {
    if (homeData) {
      setVideoPlayList(homeData);
    }
  }, [homeData]);

  return (
    <>
      {videoPlayList && videoPlayList.length > 0 ? (
        videoPlayList.map((category) => (
          <>
            <h1>{category.categoryName}</h1>
            <div key={category.categoryId} style={{ display: "flex" }}>
              {category.videoList.map((video, index) => (
                <div className={styles.cardContainer}>
                  <CardsListing key={index} item={video} />
                </div>
              ))}
            </div>
          </>
        ))
      ) : (
        <>
          <Container className={styles.cardContainer}>
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={300}
                height={200}
                style={{ margin: "20px 0" }}
              />
            ))}
          </Container>
        </>
      )}
    </>
  );
};
export default HomePage;

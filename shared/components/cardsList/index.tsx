"use client";
import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./cardsList.module.scss";
import { useRouter } from "next/navigation";

interface CardProps {
  item: any;
}

const CardsListing: React.FC<CardProps> = ({ item }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [imageSrc, setImageSrc] = useState(item.thumbnail);

  const defaultImage = "/placeholder.png";

  const toDetailPage = () => {
    router.push(`/${"details"}/${item.id}`);
  };

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  return (
    <>
      <Card
        className={styles.cardContainer}
        onClick={toDetailPage}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <CardMedia
          component="img"
          alt={item.name}
          height={140}
          width={240}
          image={item.thumbnail || defaultImage}
          onError={handleImageError}
        />
        {/* {isHover && ( */}
        <CardContent>
          <Typography gutterBottom component="div" className={styles.capital}>
            {item.name}
          </Typography>
          <Typography className={styles.description} color="text.secondary">
            {item.description.slice(0, 100)}
          </Typography>
        </CardContent>
        {/* )} */}
      </Card>
    </>
  );
};

export default CardsListing;

import React, { useEffect, useState } from "react";

interface CoverImageProps {
  imageUrl: string;
}

const TV_STATIC_IMAGE_URL = "/img/tv-static.gif";

export const CoverImage = ({ imageUrl }: CoverImageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const image = `${process.env.NEXT_PUBLIC_IMG_PATH}/${imageUrl}`;

  return (
    <img
      src={loading ? TV_STATIC_IMAGE_URL : image}
      width="100%"
      style={{
        border: "2px solid #3A3A3A",
        margin: "0 10px",
        borderRadius: "8px",
      }}
    />
  );
};

export default CoverImage;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { slowImage } from "../api/user.api";

function SlowImage() {
  async function fetchSlowImage() {
    try {
      const response = await slowImage();
      return response?.data;
    } catch (error) {
      console.log("Image api error", error);
    }
  }

  const image = useQuery({
    queryKey: "slowImage",
    queryFn: fetchSlowImage,
  });

  console.log("image", image.data, image);

  return (
    <>
      <h1>Slow Image Page </h1>

      {!image.isPending && (
        <img src={image.data.imageUrl} width="200" height="400" />
      )}
    </>
  );
}

export default SlowImage;

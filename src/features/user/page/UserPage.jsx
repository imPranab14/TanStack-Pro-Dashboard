import { useQueries, useQuery } from "@tanstack/react-query";
import {
  listOfUser,
  slowImageAPI,
  slowResponseUserList,
  unsplashImageAPI,
} from "../api/user.api.js";
import { useEffect, useState } from "react";

function UserPage() {
  const [image, setImage] = useState(null);

  //NOTE Supabase User Table API Call
  async function fetchUser() {
    const { data, error } = await listOfUser();
    if (error) {
      throw error;
    }
    return data;
  }

  //NOTE Postman Mock Server API Call
  async function fetchSlowResponseUserList() {
    const { data, error } = await slowResponseUserList();
    if (error) {
      throw error;
    }
    return data;
  }

  //Slow Image API Call
  async function fetchSlowImage() {
    try {
      const response = await slowImageAPI();
      return response?.data;
    } catch (error) {
      console.log("Image api error", error);
      throw error;
    }
  }

  //For TenStack Query
  async function fetchUnsplashImage() {
    try {
      const response = await unsplashImageAPI();
      return response?.data;
    } catch (error) {
      console.log("Image api error", error);
      throw error;
    }
  }

  //For useEffect()
  async function fetchUnsplashImageUsingUseEffect() {
    try {
      const response = await unsplashImageAPI();
      if (response.status === 200) {
        setImage(response?.data);
      }
    } catch (error) {
      console.log("Image api error", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchUnsplashImageUsingUseEffect();
  }, []);

  //NOTE TenStack Query
  // const user = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchSlowResponseUserList,
  // });

  // const results = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["user"],
  //       queryFn: fetchUser,
  //     }
  //   ],
  // });

  const slowUserData = useQuery({
    queryKey: ["slowUser"],
    queryFn: fetchSlowResponseUserList,
  });

  const slowImage = useQuery({
    queryKey: ["slowImage"],
    queryFn: fetchSlowImage,
  });

  const unsplashImage = useQuery({
    queryKey: ["unsplashImage"],
    queryFn: fetchUnsplashImage,
    // staleTime: 1000 * 60 * 10,   // ✅ VERY IMPORTANT
    // cacheTime: 1000 * 60 * 30,
    // refetchOnWindowFocus: false,
  });

  // BEST UX PATTERN)
  //IMPORTANT First Page Skeleton Loading
  //
  if (
    slowUserData.isPending ||
    slowImage.isPending ||
    unsplashImage.isPending
  ) {
    return <p className="bg-gray-300 py-6 text-center">Loading Skeleton</p>;
  }

  console.log("unsplashImage_Image", image);

  return (
    <>
      {slowUserData.isFetching && (
        <h1 className="bg-blue-400">User Data Fetching</h1>
      )}

      {slowImage.isFetching && (
        <h1 className="bg-orange-400">Image Fetching</h1>
      )}

      {unsplashImage.isFetching && (
        <h1 className="bg-red-400">Unsplash Image Fetching</h1>
      )}
      {/* {isLoading && <h1>isLoading</h1>}
      {isPending && <h1>isPending  ....</h1>} */}
      {/* {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        data?.map((ele, id) => {
        return <h1 key={id}>{ele.name}</h1>;
      })} */}

      {slowUserData.data?.map((ele, id) => {
        return <h1 key={id}>{ele.name}</h1>;
      })}

      <div className="flex gap-2 mt-4">
        {/* {!slowImage.isPending && (
        <img src={slowImage.data.imageUrl} width="200" height="400" />
      )} */}

        <div style={{ display: "grid" }}>
          <h2 className="bg-amber-300">TenStack Quey Api Call</h2>
          {!unsplashImage.isPending && (
            <img
              src={URL.createObjectURL(unsplashImage.data)}
              width="600"
              height="400"
            />
          )}

          <h2 className="bg-blue-300">useEffect Api Call</h2>
          {image &&
          <img src={URL.createObjectURL(image)} width="600" height="400" />
          }

        </div>
      </div>
    </>
  );
}

export default UserPage;

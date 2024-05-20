// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/swapnilshendepatil")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div className=" text-center bg-gray-600 text-white text-3xl p-4">
      Github Followers :{data.followers}
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/swapnilshendepatil"
  );
  return response.json();
};

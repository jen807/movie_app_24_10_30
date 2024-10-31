import { nowPlaying, popular } from "../../api";
import { useEffect, useState } from "react";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();

  useEffect(() => {
    (async () => {
      const { results: now } = await nowPlaying();
      const { results: pop } = await popular();

      setNowData(now);
      setPopData(pop);
      // console.log("인기 영화" + pop);
      // console.log("상영 영화" + now);
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  return <div>Home</div>;
};

export default Home;

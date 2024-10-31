import { nowPlaying, popular, topRated, upComing } from "../../api";
import { useEffect, useState } from "react";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();
        const { results: up } = await upComing();

        setUpData(up);
        setNowData(now);
        setPopData(pop);
        setTopData(top);
        
      } catch (error) {
        console.log(error);
      }
      // console.log("인기 영화" + pop);
      // console.log("상영 영화" + now);
    })();
  }, []);

  console.log(upData);
  console.log(nowData);
  console.log(popData);
  console.log(topData);
  return <div>Home</div>;
};

export default Home;

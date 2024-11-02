import { nowPlaying, popular, topRated, upComing } from "../../api";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import "swiper/css";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(upData);
  console.log(nowData);
  console.log(popData);
  console.log(topData);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <div>
              <Banner Data={nowData} />

              <Movies data={nowData} title={"현재상영중"}></Movies>
              <Movies data={popData} title={"현재인기순"}></Movies>
              <Movies data={topData} title={"현재상영순"}></Movies>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

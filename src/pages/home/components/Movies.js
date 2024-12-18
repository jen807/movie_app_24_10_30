import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainStyle } from "../../../GlobalStyled";
import { W500 } from "../../../constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.section`
  padding: 0 ${mainStyle.moPadding};
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.moPadding};
  }
`;

const Title = styled.div`
  margin: 50px 0;
  font-size: 22px;
  font-weight: 400;
  color: #fff;
`;

const Con = styled.div``;

const params = {
  spaceBetween: 10,
  slidesPerView: 3.3,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5,
    },

    640: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },

    320: {
      spaceBetween: 10,
      slidsePerView: 3.3,
    },
  },
};

const Movies = ({ data, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params}>
        {/* =>이부분은 매개변수로 써서 스프레드를 쓴 후 각 키에 맞는 값을 쓸 수 있도록 하는 것인지? */}
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con>
              <Link to={`/detail/${movie.id}`}>
                <img src={W500 + movie.poster_path} alt={movie.title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;

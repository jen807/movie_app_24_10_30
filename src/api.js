const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "get",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzkyMzFlYTY4ZTE3YzE5OWNiZDVlM2Q2YjY0MTAxOCIsIm5iZiI6MTczMDc4NTQwNy40OTc5NzM3LCJzdWIiOiI2NzIxYjQ0Zjk3NGE2NzZjNmRmMzNiNmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4QCA62MxVK47KS28YyxRhZr7fNnowXDhm7hwbq1T108",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());
export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());
export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());
export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDtail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const searchMovie = (keyword) => {
  const searchUrl =
    baseUrl + `search/movie?query=${keyword}&include_adult=true&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

// 프론트엔드의 요청 형식

// 동기화 새로고침해서 받아오기
// 비동기화 promise 원하는 것만 새로고침해서 받아오고 나머지는 그대로 두어 리소스 낭비를 줄인다

// 예외

// try {

// } catch (error) {

// }

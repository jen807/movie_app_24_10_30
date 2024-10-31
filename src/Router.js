import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/detail/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;

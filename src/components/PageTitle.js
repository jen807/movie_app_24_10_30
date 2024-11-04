import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | JENFLIX</title>
    </Helmet>
  );
};

export default PageTitle;

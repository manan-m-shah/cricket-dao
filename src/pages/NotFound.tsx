import { FC } from "react";
import { useParams } from "react-router-dom";

const NotFound: FC = () => {
  const params = useParams();
  const path = params["*"];

  return <main>{path} is not valid path</main>;
};

export default NotFound;

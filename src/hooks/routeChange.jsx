import { useNavigate } from "react-router-dom";

const useRouteChange = () => {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  return routeChange;
};

export default useRouteChange;

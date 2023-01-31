import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

// project import
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const user = useSelector((state) => state.user.value);
  const routes =
    JSON.stringify(user) === "{}" ? [LoginRoutes] : [MainRoutes, LoginRoutes];
  const routing = useRoutes(routes);
  return <>{routing}</>;
}

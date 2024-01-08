import { Outlet } from "react-router-dom";
import { SplashScreenContainer, MapDiv } from "./styles";

export function TesteLayout() {
  return (
    <SplashScreenContainer>
      <MapDiv />
      <Outlet/>
    </SplashScreenContainer>
  )
}
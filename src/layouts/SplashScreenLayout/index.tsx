import { Outlet } from "react-router-dom";

import { MapImage, SplashScreenContainer } from "./styles";

import mapBackgroundImage from '../../assets/mapbackground.png'

export function SplashScreenLayout() {
  return (
    <SplashScreenContainer>
      <MapImage src={mapBackgroundImage} alt="" />
      <Outlet/>
    </SplashScreenContainer>
  )
}
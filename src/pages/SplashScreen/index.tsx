import logoHiPizza from '../../assets/logoHiPizza.png'
import { SplashContainer } from './styles'

export function SplashScreen() {
  return (
    <SplashContainer>
      <img src={logoHiPizza} alt="" />
      <span>@direitos autorais</span>
    </SplashContainer>
  )
}
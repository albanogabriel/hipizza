import logoHiPizza from '../../assets/logoHiPizza.png'
import { CadastroContainer, GhostButton, PrimaryButton, ButtonContainer } from './styles'

export function Cadastro() {
  return (
    <CadastroContainer>
      <img src={logoHiPizza} alt="" />

      <ButtonContainer>
        <PrimaryButton>Cadastrar</PrimaryButton>
        <GhostButton>Entrar</GhostButton>
      </ButtonContainer>

      <span>@direitos autorais</span>
    </CadastroContainer>
  )
}
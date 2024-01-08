import styled from "styled-components";

export const CadastroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 4rem;
  align-items: center;

  span {
    position: absolute;
    padding-bottom: 2.5rem ;
    bottom: 0;
    color: ${props => props.theme["gray-900"]};
  }
`

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const BaseButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem 3rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled)hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const GhostButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled)hover {
    background: ${(props) => props.theme['green-700']};
  }
`
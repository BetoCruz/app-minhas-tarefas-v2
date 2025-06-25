import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  box-shadow: 0px 4px 4px #767373;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: rgb(240, 233, 205);
  width: 100%;
  margin-top: 16px;
`
export const imputPadrao = styled.input`
  font-size: 32px;
  font-weight: 700;
  margin-left: 8px;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  font-family: ${variaveis.fontSecundaria};
`

export const nome = styled.input`
  font-size: 32px;
  font-weight: 700;
  margin-left: 8px;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  font-family: ${variaveis.fontPrimaria};
`

export const email = styled.input`
  font-size: 24px;
  font-weight: 700;
  margin-left: 8px;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
`

export const telefone = styled.input`
  font-size: 24px;
  font-weight: 700;
  margin-left: 8px;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
   &:hover {
    opacity: 0.8;
  }}
`
// export const BotaoSalvar = styled(Botao)`
//   background-color: ${variaveis.verde};
// `
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
   &:hover {
    opacity: 0.8;
  }}
`

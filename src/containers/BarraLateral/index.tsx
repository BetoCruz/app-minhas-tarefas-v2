import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Titulo, Botao } from '../../styles'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Titulo>Pequisa de contatos</Titulo>
            <Campo
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
              type="text"
              placeholder="Pesquisar"
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar para a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
//

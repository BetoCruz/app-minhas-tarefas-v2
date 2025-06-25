import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  // captura os dados pela função de callback dentro da função onChange.
  const dispatch = useDispatch()
  // Consome dados do estado pela propriedade value do input.
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <h2>Pequisa de contatos</h2>
      <Campo
        value={termo}
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
        type="text"
        placeholder="Pesquisar"
      />
    </S.Aside>
  )
}

export default BarraLateral
//

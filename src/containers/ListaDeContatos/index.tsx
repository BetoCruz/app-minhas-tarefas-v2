import { useSelector } from 'react-redux'

// import BotaoCadastrar from '../../components/BotaoCadastrar'
import { MainContainer, Titulo } from '../../styles/'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefa = () => {
    if (termo) {
      return itens.filter(
        (itens) => itens.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  const contatos = filtraTarefa()

  return (
    <MainContainer>
      <Titulo as="p">Numero de contatos: {contatos.length}</Titulo>
      <Titulo>Buscando: {termo}</Titulo>
      <ul>
        {contatos.map((c: ContatoClass) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
      {/* <BotaoCadastrar /> */}
    </MainContainer>
  )
}

export default ListaDeContato

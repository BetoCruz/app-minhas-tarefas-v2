import BotaoCadastrar from '../../components/BotaoCadastrar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContato from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListaDeContato />
      <BotaoCadastrar />
    </>
  )
}

export default Home

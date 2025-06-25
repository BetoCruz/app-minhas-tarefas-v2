import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'
import { MainContainer, Titulo, BotaoSalvar } from '../../styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new Contato(9, nome, email, telefone)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <label htmlFor="nome">Nome</label>
        <S.campoCadastro
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          id="nome"
        />
        {''}

        <label htmlFor="email">E-mail</label>
        <S.campoCadastro
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
        />
        {''}

        <label htmlFor="telefone">Telefone</label>
        <S.campoCadastro
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="text"
          id="telefone"
        />
        {''}
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario

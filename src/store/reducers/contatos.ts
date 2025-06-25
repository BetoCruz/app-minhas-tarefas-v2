import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Fulano',
      email: 'fulano@email.com',
      telefone: '1112345678'
    },
    {
      id: 2,
      nome: 'Beltrano',
      email: 'fulano@email.com',
      telefone: '1112345678'
    },
    {
      id: 3,
      nome: 'Ciclano',
      email: 'fulano@email.com',
      telefone: '1112345678'
    },
    {
      id: 4,
      nome: 'Nome 4',
      email: 'nome4@email.com',
      telefone: '1112345678'
    },
    {
      id: 5,
      nome: 'Nome 5',
      email: 'nome4@email.com',
      telefone: '1112345678'
    },
    {
      id: 6,
      nome: 'Nome 6',
      email: 'nome4@email.com',
      telefone: '1112345678'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já existe')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer

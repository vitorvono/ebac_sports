import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { adicionar } from '../../store/reducers/carrinho'
import { toggleFav } from '../../store/reducers/favoritos'

import { Produto as ProdutoType } from '../../App'

import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootReducer) => state.favoritos.favs)
  const { imagem, nome, preco } = produto

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={imagem} alt={nome} />
      </S.Capa>
      <S.Titulo>{nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(toggleFav(produto))} type="button">
        {produtoEstaNosFavoritos(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent

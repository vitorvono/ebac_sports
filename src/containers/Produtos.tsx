import { Produto as ProdutoType } from '../App'

import { useGetProductsQuery } from '../services/ebac_products'

import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return (
      <img
        className="loading-gif"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      />
    )
  }

  return (
    <>
      <S.Produtos>
        {products?.map((produto: ProdutoType) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

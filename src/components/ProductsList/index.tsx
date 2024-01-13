import { Food } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  foods: Food[]
}

const ProductsList = ({ background, title, foods }: Props) => {
  if (foods.length === 0) {
    return null
  }

  // Pegar o cardápio do primeiro restaurante
  const italianCardapio = foods.filter((food) => food[0].cardapio)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {italianCardapio.map((food) => (
              <Product
                key={food[0].id}
                category={food[0].cardapio[0].porcao}
                description={food[0].cardapio[0].descricao}
                image={food[0].cardapio[0].foto}
                title={food[0].cardapio[0].nome}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
export default ProductsList

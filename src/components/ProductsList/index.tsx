import { Cardapio, Food } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  foods: Cardapio[]
}

const ProductsList = ({ background, title, foods }: Props) => {
  console.log('consolelog1' + foods)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {foods.map((food) => (
              <Product
                key={food.id}
                category={food.porcao}
                description={food.descricao}
                title={food.nome}
                image={food.foto}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
export default ProductsList

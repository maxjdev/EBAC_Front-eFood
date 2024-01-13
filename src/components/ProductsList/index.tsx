import { Food } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  foods: Food[]
}

const ProductsList = ({ background, title, foods }: Props) => {
  console.log('consolelog1' + foods)

  const t = foods.map((food) => food)
  console.log('consolelog2' + t)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {foods.map((food) => (
              <Product
                key={food.id}
                category={food.tipo}
                description={food.descricao}
                title={food.titulo}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
export default ProductsList

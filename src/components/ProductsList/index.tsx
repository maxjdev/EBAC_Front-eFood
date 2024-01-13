import { Food } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  foods: Food[]
}

const ProductsList = ({ background, title, foods }: Props) => {
  /* console.log(foods) */

  const t = foods.map((food) => food)
  console.log(t)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {foods.map((food) => (
              <Product
                key={''}
                category={''}
                description={'food[].descricao'}
                image={''}
                title={''}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
export default ProductsList

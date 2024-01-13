import { Food } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  foods: Food[]
}

const ProductsList = ({ background, title, foods }: Props) => {
  /* const italianCardapio = foods.filter((food) => food[0]) */
  const test = foods[0]

  console.log(test)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {test.map((food) => (
              <Product
                key={''}
                category={''}
                description={''}
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

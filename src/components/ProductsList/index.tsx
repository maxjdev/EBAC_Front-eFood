import { Menu } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  menu: Menu[]
}

const ProductsList = ({ background, title, menu }: Props) => {
  console.log('consolelog1' + menu)

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {menu.map((food) => (
              <Product
                price={food.preco}
                key={food.id}
                portion={food.porcao}
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

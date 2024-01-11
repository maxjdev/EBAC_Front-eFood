import Tag from '../Tag'
import { Description, Card, TitleH3, Infos, ButtonBuy } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ category, description, image, infos, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TitleH3>{title}</TitleH3>
    <Tag>{category}</Tag>
    <Description>{description}</Description>
    <ButtonBuy>Make a wish</ButtonBuy>
  </Card>
)

export default Product

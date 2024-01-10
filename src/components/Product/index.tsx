import Tag from '../Tag'
import { Description, Card, TitleH3, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TitleH3>{title}</TitleH3>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product

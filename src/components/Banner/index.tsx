import { Image, Title, Prices } from './styles'
import BannerImg from '../../assets/images/banner1.jpg'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Tag size="big">Offer of the day</Tag>
      <div>
        <Title>Rustic Combo</Title>
        <Prices>
          From <span>R$ 35,00</span> <br />
          for just R$ 29,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/product"
        title="Click here to take advantage of the offer"
      >
        Reserve mine
      </Button>
    </div>
  </Image>
)

export default Banner

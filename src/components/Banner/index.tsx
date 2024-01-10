import { Image, Title, Prices } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Tag size="big">Highlight of the day</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          From <span>R$ 250,00</span> <br />
          for just R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/product"
        title="Click here to take advantage of the offer"
      >
        To enjoy
      </Button>
    </div>
  </Image>
)

export default Banner

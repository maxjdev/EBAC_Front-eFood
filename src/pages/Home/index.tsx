import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import burguer from '../../assets/images/burguer-card.jpeg'
import drink from '../../assets/images/drink.jpg'

const promotions: Food[] = [
  {
    id: 1,
    category: 'Burguer',
    description:
      'Enjoy authenticity in every bite with our rustic burger, prepared with succulent meat and selected ingredients.',
    title: 'Rustic Hunger',
    infos: ['10%', 'R$ 35,00'],
    image: burguer
  },
  {
    id: 2,
    category: 'Burguer',
    description:
      'Enjoy authenticity in every bite with our rustic burger, prepared with succulent meat and selected ingredients.',
    title: 'Rustic Hunger',
    infos: ['10%', 'R$ 35,00'],
    image: burguer
  },
  {
    id: 3,
    category: 'Burguer',
    description:
      'Enjoy authenticity in every bite with our rustic burger, prepared with succulent meat and selected ingredients.',
    title: 'Rustic Hunger',
    infos: ['10%', 'R$ 35,00'],
    image: burguer
  },
  {
    id: 4,
    category: 'Burguer',
    description:
      'Enjoy authenticity in every bite with our rustic burger, prepared with succulent meat and selected ingredients.',
    title: 'Rustic Hunger',
    infos: ['10%', 'R$ 35,00'],
    image: burguer
  }
]

const shortly: Food[] = [
  {
    id: 5,
    category: 'Drink',
    description: 'Delicious natural juice.',
    title: 'Organge juice',
    infos: ['R$ 8,00'],
    image: drink
  },
  {
    id: 6,
    category: 'Drink',
    description: 'Delicious natural juice.',
    title: 'Organge juice',
    infos: ['R$ 8,00'],
    image: drink
  },
  {
    id: 7,
    category: 'Drink',
    description: 'Delicious natural juice.',
    title: 'Organge juice',
    infos: ['R$ 8,00'],
    image: drink
  },
  {
    id: 8,
    category: 'Drink',
    description: 'Delicious natural juice.',
    title: 'Organge juice',
    infos: ['R$ 8,00'],
    image: drink
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList foods={promotions} title={'Burgers'} background={'gray'} />
    <ProductsList foods={shortly} title={'Drinks'} background={'black'} />
  </>
)

export default Home

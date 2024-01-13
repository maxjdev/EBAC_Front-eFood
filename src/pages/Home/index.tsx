import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}[]

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((data) => data.json())
      .then((data) => setFoods(data))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList foods={foods} title={'Burgers'} background={'gray'} />
      <ProductsList foods={foods} title={'Drinks'} background={'black'} />
    </>
  )
}

export default Home

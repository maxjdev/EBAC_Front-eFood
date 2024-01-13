import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMenu(res[0].cardapio))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList menu={menu} title={'Burgers'} background={'black'} />
    </>
  )
}

export default Home

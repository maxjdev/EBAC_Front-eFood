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

const Home = () => {
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((data) => data.json())
      .then((data) => setMenu(data[0].cardapio))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList menu={menu} title={'Menu'} background={'black'} />
    </>
  )
}

export default Home

import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Menu } from '../Home'

const Categories = () => {
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((data) => data.json())
      .then((data) => setMenu(data[0].cardapio))
  }, [])

  return (
    <>
      <ProductsList menu={menu} title="Rustic Burguers" background={'gray'} />
    </>
  )
}

export default Categories

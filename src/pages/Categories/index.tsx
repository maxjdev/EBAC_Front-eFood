import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Food, Cardapio } from '../Home'

const Categories = () => {
  const [foods, setFoods] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((data) => data.json())
      .then((res) => setFoods(res[0].cardapio))
  }, [])

  return (
    <>
      <ProductsList foods={foods} title="Rustic Burguers" background={'gray'} />
    </>
  )
}

export default Categories

import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Food } from '../Home'

const Categories = () => {
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((data) => data.json())
      .then((data) => setFoods(data))
  }, [])

  return (
    <>
      <ProductsList foods={foods} title="Rustic Burguers" background={'gray'} />
    </>
  )
}

export default Categories

import { Image, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Banner = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res[0]))
  }, [])

  const formatEvaluation = () => {
    return 'Avaliação gastronômia: ' + restaurant?.avaliacao
  }

  return (
    <Image style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <Tag size="big">{formatEvaluation()}</Tag>
        <div>
          <Title>{restaurant?.titulo}</Title>
        </div>
        <Button type="link" to="/" title="Reservas">
          Reservas
        </Button>
      </div>
    </Image>
  )
}

export default Banner

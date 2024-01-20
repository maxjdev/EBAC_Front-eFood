import { useDispatch } from 'react-redux'
import Tag from '../Tag'
import { Description, Card, ButtonBuy, Modal, ModalContent } from './styles'
import { useState } from 'react'
import exit from '../../assets/images/fechar.png'
import { add, open } from '../../store/reducers/cart'
import { Menu } from '../../pages/Home'
import { formatPrice } from '../Cart'

type Props = {
  title: string
  portion: string
  description: string
  image: string
  price: number
  menuItem: Menu
}

const Product = ({
  portion,
  description,
  image,
  title,
  price,
  menuItem
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 90) {
      return descricao.slice(0, 90) + '...'
    }
    return descricao
  }

  const buyBtnModal = () => {
    setModalIsOpen(false)
    dispatch(open())
    dispatch(add(menuItem))
  }

  const closeModal = () => setModalIsOpen(false)
  const openModal = () => setModalIsOpen(true)

  return (
    <>
      <Card>
        <div className="card-image">
          <img src={image} alt={title} />
          <Tag>{portion}</Tag>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <Description>{getDescricao(description)}</Description>
        </div>
        <div className="card-btn">
          <h4>{formatPrice(price)}</h4>
          <ButtonBuy onClick={openModal}>Pedir</ButtonBuy>
        </div>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <div className="overlay" onClick={closeModal}></div>
        <div className="container">
          <ModalContent>
            <header>
              <h4>{title}</h4>
              <img src={exit} alt="Exit icon" onClick={closeModal} />
            </header>
            <div className="content">
              <img src={image} alt={title} />
              <div className="description">
                <p>{description}</p>
                <div>
                  <button onClick={buyBtnModal}>Pedir prato</button>
                </div>
              </div>
            </div>
          </ModalContent>
        </div>
      </Modal>
    </>
  )
}

export default Product

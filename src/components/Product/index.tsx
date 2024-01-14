import Tag from '../Tag'
import { Description, Card, ButtonBuy, Modal, ModalContent } from './styles'
import { useState } from 'react'
import exit from '../../assets/images/fechar.png'

type Props = {
  title: string
  portion: string
  description: string
  image: string
  price: number
}

const Product = ({ portion, description, image, title, price }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 90) {
      return descricao.slice(0, 90) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <div className="card-image">
          <img src={image} alt={title} />
          <Tag>{'' + portion}</Tag>
        </div>
        <div className="card-content">
          <Description>{getDescricao(description)}</Description>
        </div>
        <div className="card-btn">
          <h4>R$ {price}</h4>
          <ButtonBuy onClick={toggleModal}>Make a wish</ButtonBuy>
        </div>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <div className="overlay" onClick={toggleModal}></div>
        <div className="container">
          <ModalContent>
            <header>
              <h4>{title}</h4>
              <img src={exit} alt="Exit icon" onClick={toggleModal} />
            </header>
            <div className="content">
              <img src={image} alt={title} />
              <div className="description">
                <p>{description}</p>
                <div>
                  <button>Buy</button>
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

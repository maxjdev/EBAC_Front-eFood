import Tag from '../Tag'
import {
  Description,
  Card,
  TitleH3,
  Infos,
  ButtonBuy,
  Modal,
  ModalContent
} from './styles'
import { useState } from 'react'
import exit from '../../assets/images/fechar.png'

type Props = {
  title: string
  category: number | string
  description: string
  image: string
}

const Product = ({ category, description, image, title }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        {/*         <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos> */}
        <TitleH3>{title}</TitleH3>
        <Tag>{category}</Tag>
        <Description>{description}</Description>
        <ButtonBuy onClick={toggleModal}>Make a wish</ButtonBuy>
      </Card>
      <Modal onClick={toggleModal} className={modalIsOpen ? 'visible' : ''}>
        <div className="overlay"></div>
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

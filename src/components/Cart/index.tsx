import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import {
  Quantity,
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  CheckoutCart,
  FormDelivery
} from './styles'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { TagContainer } from '../Tag/styles'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [deliveryStep, setDeliveryStep] = useState(false)
  const [paymentStep, setPaymentStep] = useState(false)
  const closeCart = () => {
    setPaymentStep(false)
    setDeliveryStep(false)
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const isEmptyCart = () => {
    if (items.length === 0) {
      alert('Adicione um item para continuar')
    } else {
      setDeliveryStep(true)
    }
  }
  const backButton = () => {
    setDeliveryStep(false)
    setPaymentStep(false)
  }

  const nextButton = () => {
    if (deliveryStep && validateDeliveryData()) setPaymentStep(true)
    if (paymentStep && validatePaymentData()) {
      submitForm()
      closeCart()
      dispatch(clear())
    }
  }

  const validateDeliveryData = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.city.trim() !== '' &&
      formData.cep.trim() !== '' &&
      formData.number.trim() !== ''
    )
  }

  const validatePaymentData = () => {
    return (
      formData.nameDisplayCard.trim() !== '' &&
      formData.numberDisplayCard.trim() !== '' &&
      formData.codeDisplayCard.trim() !== '' &&
      formData.expiresMonthCard.trim() !== '' &&
      formData.expiresYearCard.trim() !== ''
    )
  }

  const [formData, setFormData] = useState({
    nameDisplayCard: '',
    numberDisplayCard: '',
    codeDisplayCard: '',
    expiresMonthCard: '',
    expiresYearCard: '',
    fullName: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  const submitForm = () => {
    const dadosParaAPI = {
      products: {
        id: 1,
        price: items.reduce((accumulator, item) => accumulator + item.preco, 0)
      },
      delivery: {
        receiver: formData.fullName,
        address: {
          description: formData.address,
          city: formData.city,
          zipCode: formData.cep,
          number: Number(formData.number),
          complement: formData.complement
        }
      },
      payment: {
        card: {
          name: formData.nameDisplayCard,
          number: formData.numberDisplayCard,
          code: Number(formData.codeDisplayCard),
          expires: {
            month: Number(formData.expiresMonthCard),
            year: Number(formData.expiresYearCard)
          }
        }
      }
    }

    fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosParaAPI)
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return console.log('Request Error')
        }
      })
      .then((data) => {
        console.log(data)
        navigate('/proof')
      })
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {deliveryStep ? (
          <>
            <CheckoutCart>
              <h3>Pagamento</h3>
              <FormDelivery onSubmit={submitForm}>
                {paymentStep ? (
                  <>
                    <label htmlFor="nameDisplayCard">Nome no cartão</label>
                    <InputMask
                      mask=""
                      required
                      type="text"
                      id="nameDisplayCard"
                      name="nameDisplayCard"
                      value={formData.nameDisplayCard}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nameDisplayCard: e.target.value
                        })
                      }
                    />
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="numberDisplayCard">
                          Número do cartão
                        </label>
                        <InputMask
                          mask="9999 9999 9999 9999"
                          required
                          type="text"
                          id="numberDisplayCard"
                          name="numberDisplayCard"
                          value={formData.numberDisplayCard}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              numberDisplayCard: e.target.value
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="codeDisplayCard">CVV</label>
                        <InputMask
                          mask="999"
                          required
                          type="text"
                          id="codeDisplayCard"
                          name="codeDisplayCard"
                          value={formData.codeDisplayCard}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              codeDisplayCard: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="expiresMonthCard">
                          Mes de vencimento
                        </label>
                        <InputMask
                          mask="99"
                          required
                          type="text"
                          id="expiresMonthCard"
                          name="expiresMonthCard"
                          value={formData.expiresMonthCard}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expiresMonthCard: e.target.value
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="expiresYearCard">
                          Ano de vencimento
                        </label>
                        <InputMask
                          mask="9999"
                          required
                          type="text"
                          id="expiresYearCard"
                          name="expiresYearCard"
                          value={formData.expiresYearCard}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expiresYearCard: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="fullName">Nome completo</label>
                    <InputMask
                      mask=""
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value
                        })
                      }
                    />
                    <label htmlFor="address">Endereço</label>
                    <InputMask
                      mask=""
                      required
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: e.target.value
                        })
                      }
                    />
                    <label htmlFor="city">Cidade</label>
                    <InputMask
                      mask=""
                      required
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          city: e.target.value
                        })
                      }
                    />
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          mask="999999-999"
                          required
                          type="text"
                          id="cep"
                          name="cep"
                          value={formData.cep}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              cep: e.target.value
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="number">Número</label>
                        <InputMask
                          mask="9999"
                          required
                          type="text"
                          id="number"
                          name="number"
                          value={formData.number}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              number: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <label htmlFor="complement">Complemento</label>
                    <InputMask
                      mask=""
                      type="text"
                      id="complement"
                      name="complement"
                      value={formData.complement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          complement: e.target.value
                        })
                      }
                    />
                  </>
                )}
                <Button
                  onClick={() => nextButton()}
                  type="submit"
                  title="Efetuar pagamento"
                >
                  {paymentStep ? 'Efetuar pagamento' : 'Finalizar pagamento'}
                </Button>
                <Button
                  onClick={backButton}
                  type="button"
                  title="Retornar para o carrinho"
                >
                  Retornar para o carrinho
                </Button>
              </FormDelivery>
            </CheckoutCart>
          </>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <TagContainer>{item.porcao}</TagContainer>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} Prato(s) no carrinho</Quantity>
            <Prices>Total de {formatPrice(getTotalPrice())} </Prices>
            <Button
              onClick={isEmptyCart}
              title="clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com o pedido
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

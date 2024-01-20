import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
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
import { close, remove } from '../../store/reducers/cart'
import { TagContainer } from '../Tag/styles'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [deliveryStep, setDeliveryStep] = useState(false)
  const [paymentStep, setPaymentStep] = useState(false)
  const [successPayment, setSuccessPayment] = useState(false)
  const dispatch = useDispatch()
  const closeCart = () => {
    setPaymentStep(false)
    setDeliveryStep(false)
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const nextButton = () => {
    if (deliveryStep) setPaymentStep(true)
    if (paymentStep) {
      window.location.href = '/proof'
    }
  }

  const backButton = () => {
    setDeliveryStep(false)
    setPaymentStep(false)
  }

  const isEmptyCard = () => {
    if (items.length === 0) {
      alert('Adicione um item para continuar')
    } else {
      setDeliveryStep(true)
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {deliveryStep ? (
          <>
            <CheckoutCart>
              <h3>Pagamento</h3>
              <FormDelivery>
                {paymentStep ? (
                  <>
                    <label htmlFor="nameDisplayCard">Nome no cartão</label>
                    <input
                      type="text"
                      id="nameDisplayCard"
                      name="nameDisplayCard"
                    />
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="numberDisplayCard">
                          Número do cartão
                        </label>
                        <input
                          type="text"
                          id="numberDisplayCard"
                          name="numberDisplayCard"
                        />
                      </div>
                      <div>
                        <label htmlFor="codeDisplayCard">CVV</label>
                        <input
                          type="text"
                          id="codeDisplayCard"
                          name="codeDisplayCard"
                        />
                      </div>
                    </div>
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="expiresMonthCard">
                          Mes de vencimento
                        </label>
                        <input
                          type="text"
                          id="expiresMonthCard"
                          name="expiresMonthCard"
                        />
                      </div>
                      <div>
                        <label htmlFor="expiresYearCard">
                          Ano de vencimento
                        </label>
                        <input
                          type="text"
                          id="expiresYearCard"
                          name="expiresYearCard"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="fullName">Nome completo</label>
                    <input type="text" id="fullName" name="fullName" />
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" />
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" name="city" />
                    <div className="cep-numb">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" id="cep" name="cep" />
                      </div>
                      <div>
                        <label htmlFor="number">Número</label>
                        <input type="text" id="number" name="number" />
                      </div>
                    </div>
                    <label htmlFor="complement">Complemento</label>
                    <input type="text" id="complement" name="complement" />
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
            <Quantity>{items.length} Jogo(s) no carrinho</Quantity>
            <Prices>
              Total de {formatPrice(getTotalPrice())}{' '}
              <span>Em até 6x s/ juros </span>
            </Prices>
            <Button
              onClick={isEmptyCard}
              title="clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

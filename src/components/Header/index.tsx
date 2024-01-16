import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import cart from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Menu</Link>
          </LinkItem>
        </Links>
      </nav>
      <Link to="/">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/spaghetti.png"
          alt="spaghetti"
        />
      </Link>
      <LinkCart onClick={openCart} href="#">
        {items.length} - Product(s)
        <img src={cart} alt="Cart" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header

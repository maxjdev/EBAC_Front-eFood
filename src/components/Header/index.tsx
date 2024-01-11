import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import cart from '../../assets/images/carrinho.svg'

const Header = () => (
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
        src="https://img.icons8.com/external-lineal-color-zulfa-mahendra/48/external-burguer-food-delivery-lineal-color-zulfa-mahendra.png"
        alt="eBurguer"
      />
    </Link>
    <LinkCart href="#">
      0 - Product(s)
      <img src={cart} alt="Cart" />
    </LinkCart>
  </HeaderBar>
)

export default Header

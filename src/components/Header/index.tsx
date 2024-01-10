import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
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
      <img src={logo} alt="EPLAY" />
    </Link>
    <LinkCart href="#">
      0 - Product(s)
      <img src={cart} alt="Cart" />
    </LinkCart>
  </HeaderBar>
)

export default Header

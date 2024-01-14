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
        width="30"
        height="30"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/spaghetti.png"
        alt="spaghetti"
      />
    </Link>
    <LinkCart href="#">
      0 - Product(s)
      <img src={cart} alt="Cart" />
    </LinkCart>
  </HeaderBar>
)

export default Header

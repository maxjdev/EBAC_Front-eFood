import { Container, FooterSection, Link, Links } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Links>
          <li>
            <Link>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/spaghetti.png"
                alt="spaghetti"
              />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Links>
          <li>
            <Link>
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="Facebook"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt="Facebook"
              />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        Bella Tavola Italiana is a platform for promoting establishments,
        <br /> a responsibility for delivery, <br />
        product quality is all contracted establishment.
      </p>
    </div>
  </Container>
)

export default Footer

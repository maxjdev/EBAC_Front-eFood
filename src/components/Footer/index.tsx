import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>eBurguer</SectionTitle>
        <Links>
          <li>
            <Link>
              <img
                src="https://img.icons8.com/external-lineal-color-zulfa-mahendra/48/external-burguer-food-delivery-lineal-color-zulfa-mahendra.png"
                alt=""
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
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer

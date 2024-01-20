import styled from 'styled-components'
import { Props } from './index'
import { Colors } from '../../styles'
import { ButtonBuy, Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'menu'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }

  ${ButtonBuy} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.black : Colors.gray};
  }

  h2 {
    text-align: center;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${Colors.gray};
  padding: 32px 0;
  font-size: 14px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;

    p {
      text-align: center;
    }
  }
`

export const SectionTitle = styled.h4`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${Colors.ligthGray};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 16px;
`

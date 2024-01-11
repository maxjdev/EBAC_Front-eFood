import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Colors.gray};
  padding: 14px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 222px;
    max-height: 300px;
    border-radius: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const TitleH3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  text-align: center;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ButtonBuy = styled.button`
  margin-top: 2vh;
  padding: 6px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${Colors.gray};
  color: ${Colors.white};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

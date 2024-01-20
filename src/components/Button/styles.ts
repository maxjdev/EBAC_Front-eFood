import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`

export const ButtonDone = styled(Link)`
  text-decoration: none;
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: ${Colors.green};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  width: 40%;
  margin-top: 48px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`

export const ButtonBuy = styled.button`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${Colors.green};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`

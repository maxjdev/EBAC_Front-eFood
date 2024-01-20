import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.div`
  margin: 40px 64px;
  padding: 32px;
  border-radius: 12px;
  background-color: ${Colors.gray};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin-top: 22px;
  }
`

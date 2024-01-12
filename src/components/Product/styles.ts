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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.76);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &.visible {
    display: flex;
  }

  .container {
    display: flex;
    justify-content: center;
  }
`

export const ModalContent = styled.div`
  background: ${Colors.gray};
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h4 {
      font-size: 20px;
      font-weight: bold;
    }

    img {
      cursor: pointer;
    }
  }

  .content {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 150px;
    border-radius: 8px;
    margin-right: 20px;
  }

  .description {
    text-align: center;
    margin-top: 10px;

    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    div {
      button {
        padding: 10px 20px;
        background-color: #1a1a1a;
        color: ${Colors.white};
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease;
        font-weight: bold;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`

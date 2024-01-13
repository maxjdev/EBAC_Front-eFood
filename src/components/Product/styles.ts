import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.div`
  transition: transform 0.3s ease-in-out;
  background-color: ${Colors.gray};
  position: relative;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }

  div {
    text-align: center;
    /* display: block; */
    /* flex-direction: column;
    justify-content: space-around;
    align-items: center; */
  }
`

export const TitleH3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
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

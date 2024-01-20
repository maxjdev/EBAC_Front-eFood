import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin: 8px 6px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  .card-image {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 10px;
    display: grid;
    place-items: center;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 8px;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin-bottom: 8px;
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  text-align: center;
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
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.76);
  align-items: center;
  justify-content: center;

  display: none;
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
  max-width: 800px;
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

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > img {
      width: 300px;
      height: auto;
      border-radius: 8px;
      margin-right: 20px;
    }
  }

  img {
    width: 15px;
    border-radius: 8px;
    margin-right: 20px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

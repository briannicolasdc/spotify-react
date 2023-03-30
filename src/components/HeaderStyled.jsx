/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import Login from './Login'

export default function HeaderStyled () {
  return (
    <Container>
      <div className="prev-next-buttons">
        <Button type="button">
          <span className="fa fas fa-chevron-left"></span>{' '}
        </Button>
        <Button type="button">
          <span className="fa fas fa-chevron-right"></span>{' '}
        </Button>
      </div>
      <ul>
        <li>
          <a href="#">Premium</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
        <li className="divider">|</li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
      <Login></Login>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 24px;
  padding-top: 30px;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
  z-index: 950;
  top: 0;
  margin-top: 0;
  width: 80.5%;
  height: 6%;
  right: 0;

  .prev-next-buttons {
    padding-left: 2.928vw;
    padding-right: 20.928vw;
    border: none;
    top: 0;
  }

  background-color: #101010;
  ul {
    padding-bottom: 1.93vw;
  }

  li {
    display: inline-block;
    margin: 0px 8px;
    width: 4.4vw;
  }
  li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.875em;
    letter-spacing: 1px;
  }
  li.divider {
    color: #ffffff;
    font-size: 1.625em;
    margin: 0vw 2.6vh;
    width: auto;
  }
`

const Button = styled.button`
  color: #7a7a7a;
  width: 2.5vw;
  height: 5vh;
  border-radius: 100%;
  font-size: 1.125em;
  border: 0px;
  background-color: #090909;
  margin-right: 0.732vw;
  margin-bottom: 3.90625vh;

  span {
    color: #7a7a7a;
  }
`

/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

export default function Play () {
  return (
    <PlayComponent>
      <span className="fa fa-play"></span>
    </PlayComponent>
  )
}

const PlayComponent = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 10px;
    top: -60px;
    padding: 18px;
    background-color: #1db954;
    color: black;
    border-radius: 100%;
    opacity: 0;
    transition: all ease 0.4s;
    &:hover {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`

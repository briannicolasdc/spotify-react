/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import styled from 'styled-components'
import Play from './Play'

export default function AlbumStyled (props) {
  const { imageUrl, title } = props

  return (
    <Album>
      <Play />
      <Photo src={imageUrl} alt="" />
      <Title>{title}</Title>
    </Album>
  )
}
const Album = styled.div`
  width: 100%;
  height: 80px;
  background-color: #212121;
  font-size: 1.125em;
  color: white;
  text-align: center;
  border-radius: 6px;
  &:hover {
    background-color: #535353;
  }
`

const Photo = styled.img`
  width: 5.4vw;
  height: 10.8vh;
  border-radius: 6px;
  float: left;
`

const Title = styled.h4`
  color: white;
  padding-top: 10px;
  float: left;
  padding-left: 10px;
`

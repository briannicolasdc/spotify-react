/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components'
import Play from './Play'

export default function Mix (props) {
  const { imageUrl, title, description } = props
  return (
    <Container>
      <Photo src={imageUrl} alt="" />
      <Play className="above" />
      <Title>
        {title}
      </Title>
      <br />
      <p>{description}</p>
    </Container>
  )
}

const Container = styled.div`
  width: 10vw;
  height: 35vh;
  padding: 20px 27.5px;
  background-color: #212121;
  margin: 10px;
  font-size: 0.925em;
  color: white;
  border-radius: 6px;
  margin-right: 1.098vw;
  &:hover {
    background-color: #535353;
  }

  p {
    padding-top: 40px;
  }
`

const Photo = styled.img`
  width: 10vw;
  height: 21.53vh;
  border-radius: 6px;
`

const Title = styled.h4`
  color: white;
  padding-top: 0;
  float: left;
  padding-left: 0.732vw;
  font-size: 1.125em;
`

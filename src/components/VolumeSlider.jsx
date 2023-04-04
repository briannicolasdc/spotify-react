/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components'

export const VolumeSlider = () => {
  return (
    <Container>
      <SliderBar />
    </Container>
  )
}

const Container = styled.div`
  // eslint-disable-next-line no-constant-condition, quotes
  width: 120px;
  padding-bottom: 10px;
`

const SliderBar = styled.input.attrs({
  type: 'range'
})`
  width: 100%;
`

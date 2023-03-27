import styled from "styled-components";

export const Slider = ({width}) => {
    return (
        <Container>
            <SliderBar></SliderBar>
        </Container>
    );
}

const Container =  styled.div`
    width: ${props => props.width ? props.width : 'auto'};
    padding-bottom: 10px;
`


const SliderBar = styled.input.attrs({ 
    type: 'range',
  })`
    width: 100%;
`
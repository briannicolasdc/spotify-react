import styled from 'styled-components'

export default function Sidebar() {
    return(
        <Container></Container>
    )
}

const Container = styled.div`
    background-color: #000000;
    padding: 12px;
    left: 0;
    bottom: 0;
    width: 14.5%;
    position: fixed;
    top: 0;
    padding-left: 0px;
    height: 100%;

    a{
        color: #b3b3b3;
    }
`


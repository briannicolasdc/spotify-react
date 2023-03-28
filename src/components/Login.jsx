import styled from "styled-components";

export default function Login(){
    return (
        <Container>
            <Text>Log In</Text>
        </Container>
    );
}


const Container = styled.button`
    background-color: white;
    height: 7.8vh;
    width: 13vw;
    margin-bottom: 30px;
    border-radius: 30px;
    border: none;
    margin-right: 40px;
    margin-left: 80px;
`

const Text = styled.a`
    color: black;
    font-size: large;
    font-weight: 700;

`
import styled from "styled-components";
import Mix from "./Mix";

export default function Mixes(){
    return (
        <Container>
            <Mix></Mix>
            <Mix></Mix>
            <Mix></Mix>
            <Mix></Mix>
            <Mix></Mix>
        </Container>

    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 5.857vw;
    
`;




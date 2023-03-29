import styled from "styled-components";
import getMixes from "../api/mixes";
import Mix from "./Mix";



export default function Mixes(){

    const mixes = getMixes();
    return (
        <Container>
            {mixes.map((mix, index) => {
                return <Mix imageUrl={mix.imageUrl} title={mix.title} description={mix.description} />
            })}
        </Container>

    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 5.857vw;
    
`;




import styled from "styled-components";
import Album from "./Albuns";
export default function LastListened(){

    return (
        <DivStyled>
                <GridDiv>
                    <Album></Album>
                    <Album></Album>
                    <Album></Album>
                    <Album></Album>
                    <Album></Album>
                    <Album></Album>
                </GridDiv>
        </DivStyled>
    )
}

const DivStyled = styled.div`
    margin-left: 80px;
    
`;

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

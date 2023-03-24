import styled from "styled-components";
import Play from "./Play";

export default function Mix(){
    return (
        <Container>
            <Photo src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" alt=""></Photo>
            <Play className="above"></Play>
            <Title>Mix de Tupac</Title>
            <p>Best of tupac</p>
        </Container>
    );
}

const Container = styled.div`
    width: 150px;
    padding: 20px 27.5px;
    background-color: #212121;
    margin: 10px;
    font-size: 18px;
    color: white;
    text-align: bottom;
    border-radius: 6px;
    margin-right: 15px;
    &:hover{
        background-color: #535353;
    }
`;

const Photo = styled.img`
    height: 150px;
    border-radius: 6px;
`;

const Title = styled.h4`
    color: white;
    padding-top: 0;
    float: left;
    padding-left: 10px;
`;


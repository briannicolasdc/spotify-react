import styled from "styled-components";

export default function AlbumStyled(){

    return (
        <Album>
            <Photo src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" alt=""></Photo>
            <Title>Hail Mary</Title>
        </Album>
    );
    
}

const Album = styled.div`
    width: 360px;
    height: 80px;
    background-color: #212121;
    margin: 10px;
    font-size: 24px;
    color: white;
    text-align: center;
    border-radius: 6px;
    
    &:hover{
        background-color: #252525;
    }
`;

const Photo = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 6px;
    float: left;
`

const Title = styled.h4`
    color: white;
    padding-top: 0;
    float: left;
    padding-left: 10px;
`;


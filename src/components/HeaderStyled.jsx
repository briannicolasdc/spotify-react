import styled from "styled-components";

export default function HeaderStyled () {
    return (
        <Container></Container>
    );
}

const Container = styled.div`
    padding-left: 24px;
    padding-top: 30px;
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    display: inline-flex;
    z-index: 950;
    top: 0;
    margin-top: 0;
    width: 80.5%;
    height: 6%;
    right: 0;
    
    background-color: #b3b3b3;
    span{
        color: #b3b3b3;
    }
`;
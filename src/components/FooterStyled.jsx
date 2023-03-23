import styled from "styled-components";

export default function FooterStyled() {
    return (
        <Container></Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 10%;
    bottom: 0;
    position: fixed;
    background-color: #1a1a1a;
    padding: 10px;
    margin: 0 auto;
    outline: thin solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;

    img {
    height: 60px;
    padding-right: 15px;
    padding-top: 13px;
    }

    ul {
        padding: 4px 0px;
    }

    li {
        padding-bottom: 5px;
    }

    a {
        font-size: small;
    }

    a:hover {
        text-decoration: underline;
        color: white;
    }
`;
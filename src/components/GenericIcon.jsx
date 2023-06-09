import styled from "styled-components";

export const GenericIcon = ({className, text}) => {
    return (
        <Container className={className}> 
            <a href=""> {text} </a>
         </Container>
    );
}

const Container = styled.div`
    color: #b3b3b3;
    padding-bottom: 10px;

    a{
        text-decoration: none;
        font-size: larger;
    }
`


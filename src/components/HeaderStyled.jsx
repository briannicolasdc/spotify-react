import styled from "styled-components";
import Login from "./Login";

export default function HeaderStyled () {
    return (
        <Container>
            <div className="prev-next-buttons">
                <Button type="button" ><span class="fa fas fa-chevron-left"></span> </Button>
                <Button type="button" ><span class="fa fas fa-chevron-right"></span> </Button>
                
            </div>
            <ul>
                <li>
                  <a href="#">Premium</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
                <li class="divider">|</li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
          </ul>
            <Login></Login>
        </Container>
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

    .prev-next-buttons{
        padding-left: 40px;
        padding-right: 320px;
        border: none;
        top: 0; 
        
    }
    
    background-color: #101010;
    ul{
        padding-bottom: 30px;
    }

    li {
      display: inline-block;
      margin: 0px 8px;
      width: 70px;
    }
    li a {
      color: #b3b3b3;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
    }
    li.divider {
        color: #ffffff;
        font-size: 26px;
        margin: 0px 20px;
        width: auto;
    }

   
`;



const Button = styled.button`
    color: #7a7a7a;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    font-size: 18px;
    border: 0px;
    background-color: #090909;
    margin-right: 10px;
    margin-bottom: 30px;
    
    span{
        color: #7a7a7a;
        
    }
`
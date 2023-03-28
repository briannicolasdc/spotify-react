import styled from "styled-components";
import { GenericIcon } from "./GenericIcon";
import { Slider } from "./Slider";

export default function FooterStyled() {
    return (
        <Container>
            <div className="footerLeft">
                <div>
                    <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Ambition az a ridah</a>
                        </li>
                        <li>
                            <a href="#">Tupac</a>
                        </li>
                    </ul>
                </div>
                <button><GenericIcon className="fa fa-heart"></GenericIcon></button>
            </div>
            <div class="footerMid">
                    <button >
                        <GenericIcon className="fa fa-random" aria-hidden="true"></GenericIcon>
                    </button>
                    <button >
                        <GenericIcon className="fa fa-step-backward" aria-hidden="true"></GenericIcon>
                    </button>
                    <button id="play">
                        <GenericIcon className="fa fa-play"></GenericIcon>
                    </button>
                    <button >
                        <GenericIcon className="fa fa-step-forward" aria-hidden="true"></GenericIcon>
                    </button>
                    <button >
                        <GenericIcon className="fa fa-retweet"></GenericIcon>
                    </button>
                    <div>
                        <Slider width="31.479vw"></Slider>
                    </div>
                </div>
                <div id="soundControllers">
                    <button>
                        <GenericIcon className="fa fa-microphone"></GenericIcon>
                    </button>
                    <button>
                        <GenericIcon className="fa fa-list"></GenericIcon>
                    </button>
                    <button>
                        <GenericIcon className="fa fa-desktop"></GenericIcon>
                    </button>
                    <button>
                        <GenericIcon className="fa fa-volume-off"></GenericIcon>
                    </button>
                    <div id="volume">
                        <Slider width="10.249vw" id="volume-slider"></Slider>
                </div>
            </div>
        </Container>
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
    height: 9vh;
    width: 4.685vw;
    padding-right: 15px;
    padding-top: 13px;
    padding-bottom: 10px;
    }

    ul {
        padding: 4px 0px;
        list-style-type: none;
    }

    li {
        padding-bottom: 5px;
        
    }

    a {
        color: white;
        text-decoration: none;
        font-size: small;
        &:hover {
            text-decoration: underline;
            color: white;
        }
    }
    .footerLeft{
        display: inline-flex;
        text-align: left;
    }

    button {
        background-color: #1a1a1a;
        margin-left: 10px;
        margin-top: 30px;
        height: 3.90625vh;
        border: none;
        color: #b3b3b3;
    }

    .footerMid{
        padding-bottom: 8px;
        padding-left: 75px;
        
    }

    #play{
        border-radius: 50%; 
        background-color: #b3b3b3;
        width: 2.343vw;
        height: 4.166vh;
        margin-bottom: px;
    }

    #play .fa{
        color: black;
        margin-top: 10px;
        padding-top: px;
        
    }

    #volume {
        padding-top: 30px;
        float: right;
        margin-bottom: 5px;
        margin-right: 50px;
    }
    
`;
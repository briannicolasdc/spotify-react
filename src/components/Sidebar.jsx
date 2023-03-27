import styled from 'styled-components'
import { GenericIcon } from './GenericIcon';

export default function Sidebar() {
    return(
        <Container>
            <div>
                <a href="#" >
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                        alt="Logo"></img>
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <GenericIcon className="fa fa-home" text="Home"></GenericIcon>
                    </li>
                    <li>
                        <GenericIcon className="fa fa-search" text="Search"></GenericIcon>
                    </li>
                    <li>
                        <GenericIcon className="fa fa-book" text="Library"></GenericIcon>
                    </li>
                </ul>
            </div>
            <hr />
            <div>
                <ul>
                    <li>
                        <GenericIcon className="fa fa-plus-square" text="Create Playlist"></GenericIcon>
                    </li>
                    <li>
                        <GenericIcon className="fa fa-heart" text="Liked Songs"></GenericIcon>
                    </li>
                </ul>
            </div>
            <div>
                    <ul>
                        <li>
                            <a href="#">Rap Caviar</a>
                        </li>
                        <li>
                            <a href="#">Brian</a>
                        </li>
                        <li>
                            <a href="#"> Minha playlist</a>
                        </li>
                    </ul>
                </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #000000;
    padding: 12px;
    left: 0;
    bottom: 0;
    width: 17%;
    position: fixed;
    top: 0;
    padding-left: 0px;
    height: 100%;

    a{
        color: #b3b3b3;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }


    img{
        width: 150px;
        padding-left: 15px;
        padding-top: 20px;
        padding-bottom: 15px;
    }

    li {
        list-style-type: none;
        text-align: left;
        padding-bottom: 5px;
    }

    hr {
        margin: 20px 0px 0px;
        border-color: #636363;
    }
`;


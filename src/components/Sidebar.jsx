/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import getPlaylist from '../api/playlists'
import { GenericIcon } from './GenericIcon'

export default function Sidebar () {
  const playlists = getPlaylist()
  return (
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
            <div className='playlists'>
                    <ul>
                        {playlists.map((list, index) => {
                          return (
                                <li>
                                    <a href="#">{list.title}</a>
                                </li>
                          )
                        })}
                    </ul>
                </div>
        </Container>
  )
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

  a {
    color: #b3b3b3;
    text-decoration: none;
    font-size: 1.225em;
    padding-top: 10px;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 10vw;
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

  .playlists{
    padding-top: 10px;
  }

  .playlists li {
    padding-bottom: 10px;
  }
  .playlists a {
    font-size: 1.025em;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`

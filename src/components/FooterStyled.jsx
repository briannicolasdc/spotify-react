/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import { GenericIcon } from './GenericIcon'
import { Slider } from './Slider'
import { VolumeSlider } from './VolumeSlider'

export default function FooterStyled () {
  return (
    <Container>
      <div className="footerLeft">
        <div>
          <img
            src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            alt=""
          />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Ambition az a ridah</a>
            </li>
            <li>
              <a href="#" id='artist'>Tupac</a>
            </li>
          </ul>
        </div>
        <button>
          <GenericIcon className="fa fa-heart"/>
        </button>
      </div>
      <div className="footerMid">
        <button>
          <GenericIcon
            className="fa fa-random"
            aria-hidden="true"
          />
        </button>
        <button>
          <GenericIcon
            className="fa fa-step-backward"
            aria-hidden="true"
          />
        </button>
        <button id="play">
          <GenericIcon className="fa fa-play" />
        </button>
        <button>
          <GenericIcon
            className="fa fa-step-forward"
            aria-hidden="true"
          />
        </button>
        <button>
          <GenericIcon className="fa fa-retweet"/>
        </button>
        <div>
          <Slider ></Slider>
        </div>
      </div>
      <div id="soundControllers">
        <button>
          <GenericIcon className="fa fa-microphone"/>
        </button>
        <button>
          <GenericIcon className="fa fa-list"/>
        </button>
        <button>
          <GenericIcon className="fa fa-desktop"/>
        </button>
        <button>
          <GenericIcon className="fa fa-volume-off"/>
        </button>
        <div id="volume">
          <VolumeSlider />
        </div>
      </div>
    </Container>
  )
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

  #artist {
    font-size: 0.775em;
    color: #b3b3b3;
    &:hover { color: white; }
  }
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
  .footerLeft {
    display: inline-flex;
    text-align: left;
  }

  button {
    background-color: #1a1a1a;
    margin-left: 10px;
    margin-top: 30px;
    height: 4.10625vh;
    border: none;
    color: #b3b3b3;
  }

  .footerMid {
    padding-bottom: 8px;
    padding-left: 75px;
  }

  #play {
    border-radius: 50%;
    background-color: #b3b3b3;
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
  }

  #play .fa {
    color: black;
    margin-top: 9px;
  }

  #volume {
    padding-top: 30px;
    float: right;
    margin-bottom: 5px;
    margin-right: 50px;
  }

  
`

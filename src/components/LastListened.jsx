/* eslint-disable react/jsx-key */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import Album from './Albuns'
import getAlbums from '../api/albums'

export default function LastListened () {
  const albums = getAlbums()

  return (
    <DivStyled>
      <GridDiv>
        {albums.map((album, index) => (
          <Album imageUrl={album.imageUrl} title={album.title} />
        ))}
      </GridDiv>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  margin-left: 5.857vw;
  img {
    height: 100%;
  }
`

const GridDiv = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
`

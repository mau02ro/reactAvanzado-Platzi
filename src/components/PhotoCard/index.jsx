import React from 'react'
import { Article, Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <Article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='PhotoCard' />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='30px' />{likes} likes!
      </Button>
    </Article>
  )
}

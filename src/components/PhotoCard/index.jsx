import React from 'react'
import { Article, Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, ref] = useNearScreen()
  const [storedValue, setLocalStorage] = useLocalStorage(`like-${id}`)

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='PhotoCard' />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLocalStorage(!storedValue)}>
              {
                storedValue ? <MdFavorite size='30px' /> : <MdFavoriteBorder size='30px' />
              }
              {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}

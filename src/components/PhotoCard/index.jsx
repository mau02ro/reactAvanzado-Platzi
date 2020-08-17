import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from '../FavButton'

import { useToggleLikeMutation } from '../hooks/useToogleLikeMutation'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, ref] = useNearScreen()
  const [storedValue, setLocalStorage] = useLocalStorage(`like-${id}`)
  const toggleLikePhoto = useToggleLikeMutation()

  const handleFavClick = () => {
    !storedValue &&
    toggleLikePhoto({ variables: { input: { id } } })
      .then((data) => console.log(data))

    setLocalStorage(!storedValue)
  }

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt='PhotoCard' />
              </ImgWrapper>
            </a>
            <FavButton liked={storedValue} likes={likes} onClick={handleFavClick} />

          </>
        )
      }
    </Article>
  )
}

import React, { useRef, useEffect, useState } from 'react'
import { Article, Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver((entires) => {
          const { isIntersecting } = entires[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })

        observer.observe(ref.current)
      })
  }, [ref])

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

            <Button>
              <MdFavoriteBorder size='30px' />{likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}

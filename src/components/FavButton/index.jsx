import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={onClick}>
      {
        liked ? <MdFavorite size='30px' /> : <MdFavoriteBorder size='30px' />
      }
      {likes} likes!
    </Button>
  )
}

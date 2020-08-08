import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'

import { useQuery, gql } from '@apollo/client'

// componente de orden superio
const query = gql`
query getPhotos {
  photos{
    id
    categoryId
    src
    likes
    src
    userId
    liked
  }
}
`

export const ListOfPhotoCards = (props) => {
  const { data } = useQuery(query)

  return (
    <List>
      {data && data.photos.map((photo) => (
        <Item key={photo.id}> <PhotoCard {...photo} /> </Item>
      ))}
    </List>
  )
}

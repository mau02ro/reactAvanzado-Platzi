import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'
import { useGetPhotos } from '../hooks/useGetPhotos'
// import { useQuery, gql } from '@apollo/client'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) {
    return 'Cargando ...'
  }

  if (error) {
    console.error(error)
    return 'Error ...'
  }

  return (
    <List>
      {data && data.photos.map((photo) => (
        <Item key={photo.id}> <PhotoCard {...photo} /> </Item>
      ))}
    </List>
  )
}

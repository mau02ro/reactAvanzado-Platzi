import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { useQuery, gql } from '@apollo/client'

const query = gql`
query getSinglePhoto($id: ID!){
  photo(id: $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({ detailId }) => {
  const { data, loading } = useQuery(query, { variables: { id: detailId } })
  if (loading) {
    return 'Cargando ....'
  }
  return <PhotoCard {...data.photo} />
}

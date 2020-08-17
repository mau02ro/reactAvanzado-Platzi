import { useQuery, gql } from '@apollo/client'

export function useGetPhotos (categoryId) {
  const query = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId){
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
  const { loading, error, data } = useQuery(query, {
    variables: { categoryId }
  })
  return { loading, error, data }
}

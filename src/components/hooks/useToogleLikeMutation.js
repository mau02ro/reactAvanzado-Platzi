import { gql, useMutation } from '@apollo/client'

export function useToggleLikeMutation (id) {
  const likePhoto = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id
      liked
      likes
    }
  }
`
  const [toggleLikePhoto] = useMutation(likePhoto)
  return toggleLikePhoto
}

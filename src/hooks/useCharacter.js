import { gql, useQuery } from '@apollo/client'

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name 
      id
      image
      episode {
        name
        episode
      }
    }
  }
`

const useCharacter = (id) => {
  const { loading, data, error } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  })
  return {
    loading,
    data,
    error,
  }
}

export default useCharacter

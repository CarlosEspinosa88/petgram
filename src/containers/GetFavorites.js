import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs{
    favs{
      id
      likes
      categoryId
      src
      userId
    }
  }
`

const renderProps = ({ loading, data, error }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>!Error</p>

  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProps}
  </Query>
)

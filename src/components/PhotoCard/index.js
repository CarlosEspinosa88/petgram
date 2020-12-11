
import React from 'react'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ImgWrapper, Img, Article } from './styles'
import { Link } from '@reach/router'
import propTypes from 'prop-types'

const DEFAULT_IMAGES = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGES }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }

                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propsName, componentName) {
    const propValue = props[propsName]

    if (propValue === undefined) {
      return new Error(`${propsName} value must be defined `)
    }
    if (propValue < 0) {
      return new Error(`${propsName} value must be a number int`)
    }
  }
}

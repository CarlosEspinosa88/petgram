import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://samherbert.net/svg-loaders/svg-loaders/tail-spin.svg'

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  emoji = '',
  loading = true
}) => (
  <Link to={path}>
    <Image src={cover} loading={loading} />
    {emoji}
  </Link>
)

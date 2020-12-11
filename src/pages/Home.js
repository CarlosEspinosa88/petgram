import React from 'react'
// import { Link } from '@reach/router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos para mascotas' subtitle='Con Petgram podrás ver una galería de mascotas muy bonitas'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

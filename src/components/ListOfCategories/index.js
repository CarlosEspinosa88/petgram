import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState(Array(6).fill({}))
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)

    setTimeout(() => {
      window.fetch('https://petgram-server-carlos-5vn6c7wh8.now.sh/categories')
        .then(rslt => rslt.json())
        .then(json => {
          setCategories(json)
          setLoading(false)
        })
    }, 5000)
  }, [])

  return {
    categories,
    loading
  }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderlist = (fixed, loading) => {
    return (
      <List fixed={fixed}>
        {
          categories.map((category, i) => {
            return (
              <Item key={category.id || i}>
                <Category {...category} path={`/pet/${category.id}`} loading={loading.toString()} />
              </Item>
            )
          })
        }
      </List>
    )
  }

  return (
    <>
      {renderlist(false, loading)}
      {showFixed && renderlist(true, loading)}
    </>
  )
}

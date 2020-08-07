import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    window.fetch('https://petgram-server-mau02ro.vercel.app/categories')
      .then((res) => {
        setLoading(true)
        return res.json()
      })
      .then((res) => {
        setCategories(res)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)

        console.error(err)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map((categorie) => {
          return (
            <Item key={categorie.id}> <Category {...categorie} /> </Item>
          )
        })
      }
    </List>
  )

  if (loading) {
    return 'Cargando...'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuey'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detaiId = urlParams.get('detail')
  console.log(detaiId)
  return (
    <div>
      <Logo />
      <GlobalStyle />
      {
        detaiId
          ? <PhotoCardWithQuery detailId={detaiId} />
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={2} />
            </>)
      }

    </div>
  )
}

export default App

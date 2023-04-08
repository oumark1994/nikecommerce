import React from 'react'
import {FlexContent, Hero, Sales, Stories,Footer,Navbar,Cart} from "./components/Index"
import { heroapi,popularsales,toprateslaes ,heighlight,sneaker, highlight, story,footerAPI} from './data/data'

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16'>
      <Hero heroapi={heroapi}/>
      <Sales ifExists endpoint={popularsales}/>
      <FlexContent endpoint={highlight} ifExists/>

      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
    </main>
    </>
  )
}

export default App 
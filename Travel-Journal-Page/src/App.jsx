import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/components/Header'
import Entry from './assets/components/Entry'
import data from './data'

export default function App(){
  const entryElements = data.map((entry) =>{
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })
  return(

    <div>
      <Header />
      {entryElements}
    </div>
  )
}
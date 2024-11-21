import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/components/Header'
import Entry from './assets/components/Entry'
import data from './data'

export default function App(){
  const entryElements = data.map((entry) =>{
    return (
      <Entry 
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
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
import Base from '@/components/base'
import React from 'react'

const Home = () => {
  return (
    <Base crumbs={
      [
        {name: "Introduction", url: "/introduction"},
        {name: "What is AutoPBI?"}
      ]
    }>
      Bruh
    </Base>
  )
}

export default Home
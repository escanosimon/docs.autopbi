import Base from '@/components/base'
import React from 'react'

const Home = () => {
  return (
    <Base crumbs={
      [
        {name: "Getting Started", url: "/getting-started"},
        {name: "What is AutoPBI?"}
      ]
    }>
      Bruh
    </Base>
  )
}

export default Home
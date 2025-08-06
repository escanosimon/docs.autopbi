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
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        What is AutoPBI?
      </h3>
    </Base>
  )
}

export default Home
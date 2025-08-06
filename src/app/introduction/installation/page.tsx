import Base from '@/components/base'
import React from 'react'

const Page = () => {
  return (
    <Base crumbs={
      [
        {name: "Introduction", url: "/introduction"},
        {name: "Installation"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Installation
      </h3>
    </Base>
  )
}

export default Page

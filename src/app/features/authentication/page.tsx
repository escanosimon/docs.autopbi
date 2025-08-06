import Base from '@/components/base'
import React from 'react'

const Authentication = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Authentication"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Authentication
      </h3>
    </Base>
  )
}

export default Authentication
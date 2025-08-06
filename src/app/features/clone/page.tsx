import Base from '@/components/base'
import React from 'react'

const Clone = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Clone"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Clone
      </h3>
    </Base>
  )
}

export default Clone
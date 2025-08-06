import Base from '@/components/base'
import React from 'react'

const Delete = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Delete"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Delete
      </h3>
    </Base>
  )
}

export default Delete
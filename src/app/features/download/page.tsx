import Base from '@/components/base'
import React from 'react'

const Download = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Download"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Download
      </h3>
    </Base>
  )
}

export default Download
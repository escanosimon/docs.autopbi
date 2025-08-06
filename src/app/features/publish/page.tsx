import Base from '@/components/base'
import React from 'react'

const Publish = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Publish"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Publish
      </h3>
    </Base>
  )
}

export default Publish
import Base from '@/components/base'
import React from 'react'

const Takeover = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Takeover"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Takeover
      </h3>
    </Base>
  )
}

export default Takeover
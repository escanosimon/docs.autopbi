import Base from '@/components/base'
import React from 'react'

const Scan = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Scan"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Scan
      </h3>
    </Base>
  )
}

export default Scan
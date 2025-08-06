import Base from '@/components/base'
import React from 'react'

const Refresh = () => {
  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Refresh"}
      ]
    }>
      <h3 className='font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl'>
        Bulk Refresh
      </h3>
    </Base>
  )
}

export default Refresh
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
      Bruh
    </Base>
  )
}

export default Page

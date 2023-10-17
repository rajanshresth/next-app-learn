import React from 'react'

interface Props{
    params: {slug:string[]}
    searchParams:{SortOrder:string[]}
}

const ProductPage = ({params:{slug},searchParams:{SortOrder}}:Props) => {
  return (
    <div>
      <div>UserDetailPage {`Params:${slug} and searchParams:${SortOrder}`}</div>
    </div>
  )
}

export default ProductPage
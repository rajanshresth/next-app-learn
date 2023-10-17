import React from 'react'

interface Props{
    params: {id:number,photoId:number}
}

const PhotoDetailPage = ({params:{id,photoId}}:Props) => {
  return (
    <div>PhotoDetailPage {`Id:${id} and photoId:${photoId}`}</div>
  )
}

export default PhotoDetailPage
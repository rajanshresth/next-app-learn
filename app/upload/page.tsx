"use client"
import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult{
    public_id: string
}

const UploadPage = () => {
    const [publicId,setPublicId]=useState('');
    console.log(publicId);
  return (
    <div>
        {publicId &&
        <CldImage  width="960"
        height="600"
        src={publicId}
        sizes="100vw"
        alt="Description of my image"/>}
        <CldUploadWidget uploadPreset="iicf1xvj"
        options={{
            sources: [
                "local",
                "camera",
                "google_drive",
                "dropbox"
            ]
        }}
        onUpload={(result,wedget)=>{
            if(result.event !=='success') return;
            const info = result.info as CloudinaryResult
            setPublicId(info.public_id)
        }}>
            {({ open }) => {
                function handleOnClick(e:any) {
                e.preventDefault();
                open();
            }
            return (
            <button className="btn bg-blue-600 text-black m-2" onClick={handleOnClick}>
                Upload an Image
            </button>
            );
        }}
        </CldUploadWidget>
    </div>
  )
}

export default UploadPage
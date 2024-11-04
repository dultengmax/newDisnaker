"use client"
import { UploadButton } from '@/utils/uploadthing';
import React from 'react'

const ButtonImage = () => {
  return (
    <>
         <div className="w-full flex justify-center mb-3">
      {isUploading === "" ? (
        <>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
              setIsUploading(res[0].url);
            }}
            onUploadError={() => {
              // Do something with the error.
              alert(`gambarnya kegedean,maximal 2mb`);
            }}
          />
        </>
      ) : (
        <>
        <div className="flex flex-col">         
        <div className=" w-40 h-32 relative">
          <Image
            src={`${isUploading}`}
            alt="testi"
            fill
            priority
            className="absolute object-cover mx-auto z-20"
          />
        </div>
          <Button
            type="button"
            onClick={() => handleImageDelete(isUploading)}
            variant="destructive"
            className="w-16 mt-2 mx-auto h-5"
          >
            delete
          </Button>
        </div>
        </>
      )}
      </div>
    </>
  )
}

export default ButtonImage

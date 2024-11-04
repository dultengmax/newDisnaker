import { Children } from 'react'
import React from 'react'

const EachUtils = ({of,render}:{of:any;render:any;}) => {
  if(typeof render !=="function"){
    console.error("harus function")
  }
    return Children.toArray(of.map((item:any,index:any)=>render(item,index)))
}

export default EachUtils

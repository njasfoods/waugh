import { StateProvider } from '@/context/StateContext'
import React from 'react'

const GetStartedLayout = ({children}) => {
  return ( 
    <StateProvider>
   
        {children}
   
    </StateProvider> 
  )
}

export default GetStartedLayout
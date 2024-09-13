import PropertyContainer from '@/components/Container'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Properties = () => {
  return (
   <main>
    <Navbar location={'properties'}/>
    <section>
      <PropertyContainer/>
    </section>
   </main>
  )
}

export default Properties
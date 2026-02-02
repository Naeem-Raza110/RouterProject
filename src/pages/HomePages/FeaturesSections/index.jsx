import React from 'react'
import CoreFeatures from './Sections/CoreFeatures'
import Customization from './Sections/Customization'
import Security from './Sections/Security'
import Support from './Sections/Support'

function index() {
  return (
    <div>
    <CoreFeatures />
    <Customization />
    <Security />
    <Support />
    </div>
  )
}

export default index
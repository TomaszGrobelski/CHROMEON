import React from 'react'
import OldNewYou from './OldNewYou'
import Opinions from './Opinions'

function OpinionSection() {
  return (
    <div >
        <OldNewYou />
        <div className='flex justify-center'>
        <Opinions />

        </div>
    </div>
  )
}

export default OpinionSection
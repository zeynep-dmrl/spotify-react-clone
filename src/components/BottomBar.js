import React from 'react'
import PlayerComponent from './BottomBar/PlayerComponent'

function BottomBar() {
  return (
    <div className='h-24 bg-footer border-t border-white border-opacity-5'>
      <PlayerComponent />
    </div>
  )
}

export default BottomBar
import React, { useState } from 'react'

function ArtPopUp( props ) {

  const [open, setOpen] = useState(false);
  return (
    <div className='art-pop-up'>
        <div className='content'>
            <span className='close-icon' onClick={props.handleClose}>x</span>
            {props.content}
        </div>
    </div>
  )
}

export default ArtPopUp
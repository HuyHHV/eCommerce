import React from 'react'

function Error({children}) {
  return (
    <div className='bg-red-200 text-sm'>
        {children}
    </div>
  )
}

export default Error
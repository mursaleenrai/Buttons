import React from 'react'

const Buttons = () => {
  return (
    <div className='btn-main-div'>
        <h1>Primary Buttons</h1>
        <div className='btn-div'>
          <button className=' static login-btn'>Login</button>
          <button className=' static signup-btn'>Sign up</button>
          <button className=' static logout-btn'>Log out</button>
        </div>
        {/* focus state */}
        <div>
            <h1>Active Buttons</h1>
        <div className='btn-div'>
          <button className=' active login-btn'>Login</button>
          <button className=' active signup-btn'>Sign up</button>
          <button className=' active logout-btn'>Log out</button>
        </div>
        </div>

        {/* hover state */}
        <div>
            <h1>Hover Buttons</h1>
        <div className='btn-div'>
          <button className=' hover login-btn'>Login</button>
          <button className=' hover signup-btn'>Sign up</button>
          <button className=' hover logout-btn'>Log out</button>
        </div>
        </div>
    </div>
  )
}

export default Buttons

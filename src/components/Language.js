import React from 'react'
import {BiWorld} from 'react-icons/bi'
const Language = () => {
  return (
    <div>
        <div className='wicon'>
            <p className='profile'><span className='icon'><BiWorld/></span><b className='iline'>Languages</b></p>
            <p className='profile'>English</p>
        <div className='mark'>
            <div className='percentage'style={{width:'100%'}}></div>
        </div>
        <p className='profile'>Spanish</p>
        <div className='mark'>
            <div className='percentage'style={{width:'50%'}}></div>
        </div>
        <p className='profile'>German</p>
        <div className='mark'>
            <div className='percentage'style={{width:'25%'}}></div>
        </div>
        </div>
    </div>
  )
}

export default Language
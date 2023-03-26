import React from 'react'
import {FaStarOfLife} from 'react-icons/fa'
const Skils = () => {
  return (
    <div>
        <div className='wicon'>
            <div>
         <p className='profile'><span className='icon'><FaStarOfLife/></span><b className='iline'>Skills</b></p>
        </div>
        <p className='profile'>Adope Photoshop</p>
        <div className='mark'>
            <div className='percentage'style={{width:'90%'}}><span  style={{marginLeft:'45%'}}>90%</span></div>
        </div>
        <p className='profile'>Photography</p>
        <div className='mark'>
            <div className='percentage'style={{width:'80%'}}><span style={{marginLeft:'40%'}}>80%</span></div>
        </div>
        <p className='profile'>Illustrator</p>
        <div className='mark'>
            <div className='percentage'style={{width:'75%'}}><span style={{marginLeft:'37.5%'}}>75%</span></div>
        </div>
        <p className='profile'>Media</p>
        <div className='mark'>
            <div className='percentage'style={{width:'50%'}}><span style={{marginLeft:'25%'}}>50%</span></div>
        </div>
        </div>
    </div>
  )
}

export default Skils
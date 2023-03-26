import React from 'react'
import {FaBriefcase} from 'react-icons/fa'
import {ImHome} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Details = () => {
  return (
    <div className='wicon'>
        <p className='profile'><span className='icon'><FaBriefcase/></span><span className='iline'>Designer</span> </p>
        <p className='profile'><span className='icon'><ImHome/></span><span className='iline'>London,Uk</span> </p>
        <p className='profile'><span className='icon'><AiOutlineMail/></span><span className='iline'>ex@mail.com</span> </p>
        <p className='profile'><span className='icon'><BsFillTelephoneFill/></span><span className='iline'>8973020461</span> </p>
        <hr></hr>
    </div>
  )
}

export default Details
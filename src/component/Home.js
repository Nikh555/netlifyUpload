import React from 'react';
import RUHSImg from '../file/lines-Img.jpg'
import {Link as ScrollLink} from 'react-scroll'

function Home() {
  return (
    <>
        <div className="imgClass mx-0 p-0 w-100" id='home'>
        <span className='home-title container'>Welcome <br/> Medico</span>
        <ScrollLink to='notes'  type="button" className="btnNotes btn btn-primary">Get notes</ScrollLink>
        {/* <div id='imgHome'></div> */}
        <img src={RUHSImg}  alt="Error 404" id='imgHome'/>
        </div>
    </>
  )
}

export default Home
import { TypeAnimation } from "react-type-animation"
import {FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
function Main() {

  return (
<div id='main'>
<img className='w-full h-screen object-cover' src="/bgME.jpg" alt="image here" />
<div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
  <div className='max-w-[700px] pr-[90] pb-[250px] h-full w-full flex flex-col justify-center lg:items-start items-center lg:pl-[100px]'><h1 className=' text-4xl font-bold text-gray-800 flex'>
    I'm </h1>
    <h1 className=' text-4xl font-bold text-gray-800 flex text-center'>Onell Murphy</h1>
    <h2 className='flex sm:text-3xl text-2xl pt-2 text-gray-800'>I'm a <TypeAnimation
      sequence={[
        'Palautog',
        2000,
        'Gamer',
        2000,
        'Programmer',
        2000,
      ]}
      wrapper="div"
      repeat={Infinity}
      style={{ fontSize: '1em',paddingLeft:'5px'}}
    />
      </h2>
      <div className='flex justify-between pt-6 max-w-[200px] w-full'>
      <a href='https://www.facebook.com/autistnic' target="_blank">
      <FaFacebookF className='cursor-pointer' size={20}/>
      </a>
      <a href='https://www.instagram.com/neko.eth/' target="_blank">
      <FaInstagram className='cursor-pointer' size={20}/>
      </a>
      <a href='https://www.linkedin.com/in/nekonii' target="_blank">
      <FaLinkedinIn className='cursor-pointer' size={20}/>
      </a>
      <a href='https://www.dotabuff.com/players/397968290' target="_blank">
      <img className='cursor-pointer w-[20px] h-[20px]'src='/dotalink.png'/>
      </a>
      </div>
      </div>
</div>

</div>
  )
}

export default Main

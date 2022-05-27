import React,{useEffect, useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {useStateContext} from '../contexts/ContextProvider';
import {Header} from './Header'
import {Cart} from './Cart'
import {Chat} from './Chat'
import {Notification} from './Notification'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'


const NavButton =({title,icon,customFuc,color,dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFuc}
     style={{color}}
     className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
    <span style={{background:dotColor}}
     className="absolute inline-flex rounded-full h-2 w-2 right-2
      top-2
     "
    >
      {icon}
    </span>
    </button>
  </TooltipComponent>
)

const Navbar =() =>{

  const {activeMenu,setActiveMenu}=useStateContext()
  const {isClicked,setisClicked }=useStateContext()

  const handleClick =()=>{}

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
     <NavButton 
      title="Menu"
      customFuc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
      color="blue"
      icon={<AiOutlineMenu/>}
     />
      <div className="flex">
        <NavButton 
        title="Cart"
        dotColor="#03C9D7"
        customFuc={()=>handleClick('cart')}
        color="blue"
        icon={<FiShoppingCart/>}/>
        <NavButton 
        title="Chat"
        dotColor="#03C9D7"
        customFuc={()=>handleClick('chat')}
        color="blue"
        icon={<BsChatLeft/>}/>
        <NavButton 
        title="Notifications"
        dotColor="#03C9D7"
        customFuc={()=>handleClick('Notification')}
        color="blue"
        icon={<RiNotification3Line/>}/>

        <TooltipComponent content="Profile" position="BottomCenter">
           <div className='flex item-center gap-2 p-2 cursor-pointer rounded-lg'
           onClick={()=>handleClick('user profile')} 
          >
           <img 
           className="rounded-full w-8 h-8"
            src={avatar}
           />
          <p>
            <span className='text-gray-400 text-14'>Hi </span>{ ' '}
            <span className='text-gray-400 font-bold text-14'> Henry Juuko</span>
          </p>
           <MdKeyboardArrowDown
            className='text-gray-400 text-14'
           />
           </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar
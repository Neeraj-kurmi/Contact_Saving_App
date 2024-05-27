import React from 'react'
import { createPortal } from 'react-dom';
import { GiCrossedSwords } from "react-icons/gi";
function Modal({onClose,isOpen,children}) {
  return createPortal(
    <>
        {isOpen && (
          <div
        className=' grid place-items-center h-screen w-screen absolute top-0 backdrop-blur z-40'
          
          >
          <div className=' m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4'>
             <div className='flex justify-end'>
                 <GiCrossedSwords 
                 onClick={onClose}
                 className='text-2xl self-end'/>
             </div>
             {children}
        </div>  
          </div>
        )}
    </>
  ,document.getElementById("model-root"))
}

export default Modal
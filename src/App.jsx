import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { CiSearch ,CiCirclePlus} from "react-icons/ci";
import {collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase"
import Contact_card from "./components/Contact_card";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const  App= () =>{
  
  const [contacts,setcontacts]=useState([]);

  const {isOpen,onClose,onOpen}=useDisclose();

  useEffect(()=>{
    const get_contacts=async()=>{
      try {
        const constacts_ref=collection(db,"contact");

        onSnapshot(constacts_ref,(snapshot)=>{
          const contact_list=snapshot.docs.map((doc)=>{
            return {
              id:doc.id,
              ...doc.data(),
            };
          }
          );
          setcontacts(contact_list)
          return contact_list
        })

      } catch (error) {
          console.log(error)
      }
    }
    get_contacts();
  },[])


  const filterContacts=(e)=>{
    const value=e.target.value

    const constacts_ref=collection(db,"contact");

    onSnapshot(constacts_ref,(snapshot)=>{
      const contact_list=snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data(),
        };
      }
      );

      const filteredContacts=contact_list.filter((contact)=>
        contact.name.toLowerCase().includes(value.toLowerCase())
     )

      setcontacts(filteredContacts)

      return filteredContacts
    })
  }

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar className=" "/>
       <div className="flex gap-2">
         <div className="flex flex-grow relative items-center">
            <CiSearch 
            
            className="absolute text-white text-3xl ml-1"/>
            <input 
            onChange={filterContacts}
            
            type="text" className=" flex-grow border bg-transparent border-white 
            rounded-md h-10 text-white pl-9" ></input>
            </div>
            <CiCirclePlus 
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"/>
       </div>
       <div className="mt-4 flex  flex-col gap-3">
         {contacts.length<=0 ?<NotFoundContact/>
          : contacts.map((contact)=>(
              <Contact_card key={contact.id} contact={contact}/>
          ))
         }
       </div>
    </div>
    <AddAndUpdateContact
     isOpen ={isOpen}
    onClose={onClose}
    />
    <ToastContainer
      position="bottom-center"
    />
    </>
  )
}

export default App

import { FaRegUserCircle, FaTrash } from 'react-icons/fa'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclose from '../hooks/useDisclose'

function Contact_card({contact}) {
  const {isOpen,onClose,onOpen}=useDisclose();

  const deleteContact = async(id) =>{
    try {
      await deleteDoc(doc(db,"contact",id))
      toast.success("contact deleted successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div key={contact.id} className="bg-yellow flex justify-between items-center p-2
              rounded-lg"> 
                <div className="flex gap-1">
                <FaRegUserCircle className="text-orange text-4xl"/>
                <div className="">
                   <h2 className="font-medium">{contact.name}</h2>
                   <p className="text-sm">{contact.email}</p>
                </div>
                </div>
                <div className="flex text-2xl gap-1">
                       <RiEditCircleLine 
                        onClick={onOpen}
                        className='cursor-pointer'
                       />
                       <FaTrash 
                       onClick={()=>deleteContact(contact.id)}
                       className="text-orange cursor-pointer"/>
                </div>
              </div>
               <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
              </>
  )
}

export default Contact_card
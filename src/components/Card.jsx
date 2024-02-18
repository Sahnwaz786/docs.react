import React from 'react'
import { FaFileArchive } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference }) {
  return (

         <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{bounceDamping:80,bounceStiffness:100}} className='flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-300 bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
         <FaFileArchive />
         <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
         <div className='footer absolute bottom-0 left-0 w-full  '>
            <div className='flex justify-between items-center px-4 mb-5  ' >
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-600 flex justify-center items-center'>
                  {data.close ? <IoClose/> : <MdOutlineFileDownload size={17} />}
                
                </span>
                
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
            </div>
              )
            }
            
         </div>
         </motion.div>
         
  )
}

export default Card
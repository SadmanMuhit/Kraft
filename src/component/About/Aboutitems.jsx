import React from 'react'

const Aboutitems = ({title, icon}) => {
  return (
    <div className="bg-current py-16 flex flex-col gap-5 items-center hover:bg-thired group transition-all cursor-pointer">
        <span className='group-hover:text-white transition-all'>{icon}</span>
      <h3 className='text-thired text-2x1 font-roboto font-medium group-hover:text-white transition-all'>{title}</h3>
    </div>
  )
}
export default Aboutitems

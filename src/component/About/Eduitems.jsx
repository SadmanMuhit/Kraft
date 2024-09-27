import React from 'react'

const Eduitems = ({date, children,border}) => {
  return (
    <div className={`${border ? border:""}`}>
      <h3 className='font-roboto text-thired text-sm font-bold'>{date}</h3>
      <p className='font-roboto text-secendary text-sm font-normal mt-1'>{children}</p>
    </div>
  );
};

export default Eduitems

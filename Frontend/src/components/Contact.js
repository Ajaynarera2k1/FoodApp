import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>This is the Contact Page</h2>
      <form className='m-6 p-4 bg-gray-100 w-6/12 mx-auto flex  flex-wrap flex-col items-center shadow-xl  '>
           <input type='text' placeholder='enter your name' className="border border-black m-2 p-1" />
           <input type='text' placeholder='enter your qualification'  className="border border-black m-2 p-1"  />
           <button  className="border border-black px-2 py-1 m-2 rounded-md bg-gray-100" >submit</button>
      </form>
    </div>
  );
};

export default Contact;

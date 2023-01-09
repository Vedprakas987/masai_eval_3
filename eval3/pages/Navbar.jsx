import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div style={{margin:"auto",textAlign:"center",width:"50%"}}>
           <h1 style={{backgroundColor:"teal"}}>Welcome to Vedprakash Sinha Portfolio</h1> 
            </div>
            <br/>
            <br/>
            <h1 style={{backgroundColor:"teal",color:"white",padding:"5px"}}>
            <Link href='/Home'>Home</Link>
            </h1>
          <h1 style={{backgroundColor:"teal",color:"white",padding:'5px'}}>
          <Link href='/Repository'>Repository</Link>
            </h1>
           


        </div>
    );
}

export default Navbar;

import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

export const Button = () => {
    return ( 
        <Link to='./sign-up' >
            <button className='btn'>
                Sign&nbsp;up
            </button>
        </Link>
     );
}
 
export default Button;
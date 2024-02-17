import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Upperbar(props) {
    return (
        <div className='flex justify-between items-center  py-4 upperbar' style={{position:'fixed',left:'100px'}}>
            <h1 className=' text-left border-l-3 font-bold text-2xl'style={{borderLeft: '4px rgba(83, 172, 255, 1) solid'}} >ALERTS</h1>
        <div className='text-center rounded flex items-center p-1 input-box'>
            <input className="rounded px-2 w-100" placeholder='Search by'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="py-1"/>
        </div>
        </div>
        
    );
}

export default Upperbar;
import React from 'react';
 import allfields from './data'
 import Upperbar from './Upperbar';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
 import nodes from '../assets/nodes.svg'
 import trade from '../assets/trade.svg'
 import num from '../assets/num.svg'
 import attach from '../assets/attach.svg'
function Content(props) {
    const allrows=allfields.map((row)=>{return( 
    <div className='row-line flex rounded justify-between p-2 m-3 items-center' key={row.type}>
        <img src={attach}/>
        <span className='px-4 text-right'>{row.type}</span>
        <span className='px-4 border-r'></span>
        <img src={num}/>
        <span className='px-4 '>{row.num}</span>
        <span className='px-4 border-r'></span>
        <img src={trade} />
        <span className='px-4 ' style={row.risk=='High Risk'?{color:'#D94111'}:{color:'#118F4B'}}>{row.status}</span>
        <span className='px-4 border-r'></span>
        <img src={nodes}/>
        <span className='px-4 '>{row.risk}</span>
        </div>
    )})
    return (
        <>
        
       
        <div className="content m-1">
            <div className='container'>
        <div className='allrows'>{allrows}</div>
                   
               
            </div>
            </div>
      
        </>
    );
}

export default Content;
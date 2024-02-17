import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import arrow from '../assets/arrow.svg'
import care from '../assets/care.svg'
import material from '../assets/material.svg'
import energy from '../assets/energy.svg'
import consumer from '../assets/consumer.svg'
import cart from '../assets/cart.svg'
import realstate from '../assets/realstate.svg'
import it from '../assets/it.svg'
import communication from '../assets/communication.svg'
import indust from '../assets/indust.svg'
function Filters(props) {
  return (
    <div className="filter my-3 rounded">
      <div className="container mx-auto px-4">
        <h4 className="font-semibold my-1 leading-loose">Filters</h4>

        <div className="flex flex-row  justify-between px-1">
          <div className="top">filter Applies</div>
          <div className="top">clear all</div>
        </div>
        <div className="box-state px-1 flex rounded justify-start justify-items-center">
          <p className="state px-2  mb-3 rounded-md  ">
            <span className="mx-1">Real State</span>
           <FontAwesomeIcon icon={faXmark} className="" />
            </p>
        </div>
        <div className="box-state pb-3">
        <div className="stock mx-2 my-2 text-left">
          <div className="">Stock</div>
          <div className="flex justify-between input-box mx-3 px-2 rounded ">
            <input className="rounded px-2 w-100" placeholder="$ TICKER" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="py-1"/>
          </div>
          <div></div>
        </div>
      
        <div className="menu text-left  px-2">
          <div className="flex" style={{ fontSize: 15 }}> 
            <img src={arrow} className="mt-1 pr-1"/>
            Industry
            </div>
          <div
            className="flex flex-row ml-1 justify-between"
            style={{ fontSize: 11 }}
          >
            <div className="border-l pl-1 "  style={{ fontSize: 10 }} >
              
              <p className="flex items-center mb-1 mt-2"><img src={care} className="p-1 " /> Health Care</p>
              <p className="flex items-center">  <img src={material} className="p-1 mb-1"/>Materials</p>
              <p className="flex items-center">  <img src={energy} className="p-1 mb-1"/>Energy</p>
              <p className="flex items-center"><img src={consumer} className="p-1 mb-1"/> Consumer discretionary</p>
              <p className="flex items-center"><img src={cart} className="p-1 mb-1"/> Consumer staples</p>
              <p className="flex items-center "><img src={realstate} className="p-1 mb-1"/> 
              <span>Real Estate</span></p>
          
            </div>
            <div className="border-l pl-1 "  style={{ fontSize: 10 }}>
            <p className="flex items-center "><img src={it} className="p-1 mb-1"/> 
            <span>IT</span></p>
            <p className="flex items-center "><img src={communication} className="p-1 mb-1"/>
            <span>Comminucations</span></p>
            <p className="flex items-center "><img src={indust} className="p-1 mb-1"/>
            <span>Industrials</span></p>
            </div>
          </div>
        </div>

        <div
          className="section2 flex flex-row justify-between mx-4 mt-1 "
          style={{ fontSize: 12 }}
        >
         
          <div className="   ">
          <div className="flex" style={{ fontSize: 15 }}> 
            <img src={arrow} className="mt-1 pr-1"/>
            market cap
            </div>
            <p>Low Risk</p>
            <p>Low Risk</p>
            <p>Low Risk</p>
          </div>
          <div className="     ">
          <div className="flex" style={{ fontSize: 15 }}> 
            <img src={arrow} className="mt-1 pr-1"/>
            Risk Level
            </div>
            <p>Low Risk</p>
            <p>Low Risk</p>
            <p>Low Risk</p>
          </div>
        </div>
        <div
          className="section3 flex flex-row mx-4 my-2 justify-between "
          style={{ fontSize: 15 }}
        >
          <div className=" px-2">
            <p className="bold text-center"> Strategy</p>
            <p className="item">Big Option Buys</p> 
            <p className="box rounded  px-1">Merger Arbitrage</p>
            <p className="item">Short Reports</p> 
          </div>
          <div className=" px-2 ">
            <p  className="bold text-center">Asset</p>
            <p className="item">Stocks</p>
            <p className="box rounded  px-1">Options</p>
            <p className="item">Futures</p> 
          </div>
        </div>
        </div>
        <div className=" flex  text-center m-2 justify-center">
            <div className="apply-btn  w-32 p-1 rounded">Apply</div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

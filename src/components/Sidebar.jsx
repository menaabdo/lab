import React ,{useState}from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import trading from "../assets/trading.svg";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import avatar from '../assets/avatar.svg'
import Avatar from "antd/es/avatar/avatar";
function Sidebar(props) {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const handleSidebarDisplay=(e)=>{
         setDisplaySidebar(!displaySidebar)

  }
  return (
    <>
   {displaySidebar?( <div className= 'sidebar' onClick={handleSidebarDisplay}>
      <div className="img-logo">
        <img src={logo} />
      </div>
      <ul className="menu py-3">
        <li className="flex justify-start items-center  py-2">
        <FontAwesomeIcon icon={faBell}  className="pr-1"/>
          Alerts
        </li>
        <li className="flex justify-start items-center  py-2">
          <FontAwesomeIcon icon={faGraduationCap} className="pr-1" />
          Training
        </li>
        <li id='inactive1' className="flex justify-start items-center  secondary py-2">
          <FontAwesomeIcon icon={faGears} className="secondary pr-1" />
          Automation
        </li>

        <li  id='inactive2'className="flex py-2 items-center ">
          <FontAwesomeIcon icon={faFolderOpen} className="secondary pr-1" />
          Portfolio
        </li>
        <li className="flex py-2 items-center " style={{ color: "rgba(93, 93, 93, 1)" }}>
          <img src={trading} className="pr-1" />
          Trading
        </li>
      </ul>

      <div id="item" className="text-center">
        <div className=" flex  justify-item-center">
          <div>
          <img src={avatar}  />
          </div>
          <div className="">
            <p>Moni Roy</p>
            <p className="secondary"> Beginner</p>
          </div>
        </div>
        <span className="secondary mt-8">Street Suite. 2.0</span>
      </div>
    </div>):(
      <div className="sidebar-x" onClick={handleSidebarDisplay}>
        <div className="img-logo-x">
          <img src={logo}/>
        </div>
        <div>
        <ul className="menu py-3">
        <li className="flex justify-center py-2">
          <img src={bell} className="pr-1" />
          
        </li>
        <li className="flex justify-center py-2">
          <FontAwesomeIcon icon={faGraduationCap} className="" />
         
        </li>
        <li className="flex justify-center secondary py-2">
          <FontAwesomeIcon icon={faGears} className="secondary pr-1" />
          
        </li>

        <li className="flex flex justify-center py-2">
          <FontAwesomeIcon icon={faFolderOpen} className="secondary pr-1" />
        
        </li>
        <li className="flex flex justify-center py-2" style={{ color: "rgba(93, 93, 93, 1)" }}>
          <img src={trading} className="pr-1" />
         
        </li>
          </ul>
        </div>
      </div>
    )
    
    
    
    }
    </>
  )
}

export default Sidebar;

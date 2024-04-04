import React, { useState } from 'react';
import './InfoBar.css';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { addLogs } from '../../libs/apis/data';

function InfoBar({ heading }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [val,setVal]=useState(3);

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  const handleSubmit=async (e)=>{
      e.preventDefault();
      await addLogs(val);
      setVal(3);
  }

  return (
    <div
      className={`text-white d-flex justify-content-between infoBar ${
        isSmallScreen ? 'p-2' : 'p-4'
      }`}
    >
      <div className="fs-4 text-uppercase fw-bold infoHeading">{heading}</div>
      <div className="d-flex ">
      <form
        onSubmit={handleSubmit}
          className="d-flex justify-content-end"
        >
          <input
            className=" bg-transparent text-white form-control me-2 w-50"
            type="number"
            placeholder="1"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="btn btn-outline-light text-white" type="submit">
            Add Log
          </button>
        </form>
        <MdOutlineNotificationsNone className="ms-3 fs-2" />
      </div>
    </div>
  );
}

export default InfoBar;

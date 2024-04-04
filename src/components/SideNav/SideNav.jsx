import React from 'react';
import './SideNav.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { LiaUserCircle } from 'react-icons/lia';
import { navItems } from './config';
import NavItem from './NavItem';
import TopNavbar from '../TopNavbar/TopNavbar';

function SideNav({ showSideNav, setShowSideNav, isSmallScreen }) {
  return (
    <>
      {isSmallScreen ? (
        <>
          <TopNavbar />
        </>
      ) : (
        <div className="sidenavPanel d-flex h-100 text-white flex-column p-3 position-relative">
          <div className=" sidenavHeading mx-auto mt-4 h3 text-center">
            <p className={`fs-5 ms-2 ${showSideNav ? 'd-inline' : 'd-none'}`}>
              Multyfi
            </p>
          </div>
          <hr />
          <div className="position-relative text-end">
            <button
              className="closeButton"
              onClick={() => setShowSideNav(!showSideNav)}
            >
              {showSideNav ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
          </div>
          <div
            className="d-flex flex-column justify-content-start align-items-start mx-auto w-80"
            style={{ height: '100%' }}
          >
            {navItems.map((nav) => (
              <NavItem nav={nav} showSideNav={showSideNav} />
            ))}
          </div>
          <hr />
          <div className="d-flex fs-5 mx-auto">
            <LiaUserCircle className="fs-2" />
            <p className={`ms-4 ${showSideNav ? '' : 'd-none'}`}> User</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;

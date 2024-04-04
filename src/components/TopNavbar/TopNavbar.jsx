import React from 'react';
import { navItems } from '../SideNav/config';

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark w-100 px-2">
      <div className="w-100">
        <a class="navbar-brand" href="/">
          <p className={`d-inline text-white fs-5 ms-2`}>Multify</p>
        </a>
        <div
          className="d-inline-flex justify-content-end text-end ms-auto"
          style={{ width: '64%' }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {navItems.map((nav) => (
              <a class="nav-link" aria-current="page" href={nav.link}>
                <nav.icon className={`mx-2 `} />
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

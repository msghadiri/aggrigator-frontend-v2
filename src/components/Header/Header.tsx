import React, { useEffect, useState } from "react";
import logoPic from "../../assets/mainlogo.png";
import { Link } from "react-router-dom";
import ArrowDownFont from "../../assets/arrow-down-sign-to-navigate.png";
import ChainsDropdown from "./ChainsDropdown";
import Logo from "./Logo/Logo";
import ChainsButton from "./ChainsButton";
import ConnectWalletButton from "./ConnectWalletButton";
import { hooks, metaMask } from "../../connectors/metaMask";
import Menu from "./Menu";
function Header() {
  const [toggle, setToggle] = useState(true);
  const toggleMenu = () => {
    setToggle(!toggle);
    setDropdown(false);
  };
  const [dropdown, setDropdown] = useState(false);

  const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = hooks;
  const isActivating = useIsActivating();
  return (
    <nav className='bg-white shadow-lg z-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <Link to='/' className='flex items-center py-4 px-2'>
                {/* Main Menu Logo */}
                <Logo logoPic={logoPic} />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <Menu />
          </div>
          {/* Secondary Navbar items */}
          <div className='hidden md:flex items-center space-x-3 '>
            {/* Chains Button Dropdown */}
            <ChainsButton
              ArrowDownFont={ArrowDownFont}
              setDropdown={setDropdown}
              dropdown={dropdown}
              setToggle={setToggle}
            />
            {/* Check showing dropdown */}
            {dropdown ? <ChainsDropdown /> : ""}

            {/* Connect wallet button */}
            <ConnectWalletButton />
          </div>
          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <div className='md:hidden flex items-center mr-5'>
              <ChainsButton
                ArrowDownFont={ArrowDownFont}
                setDropdown={setDropdown}
                dropdown={dropdown}
                setToggle={setToggle}
              />
              {dropdown ? <ChainsDropdown /> : ""}
            </div>
            <button
              onClick={toggleMenu}
              className='outline-none mobile-menu-button'
            >
              <svg
                className=' w-6 h-6 text-gray-500 hover:text-green-500 '
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${toggle ? "hidden" : ""} mobile-menu`}>
        <ul className=''>
          <li className='active'>
            <a
              href='index.html'
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Contact Us
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

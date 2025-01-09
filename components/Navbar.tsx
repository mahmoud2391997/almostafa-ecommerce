import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faEnvelope,faMobile } from '@fortawesome/free-solid-svg-icons'
import LanguageDropdown from "./language";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="w-full h-[45px] flex justify-center items-center text-[var(--foreground)] bg-white relative">
      <div className="sm:w-full flex justify-center items-center m-0   ">
        <div className="flex  justify-evenly items-center w-full sm:flex-row h-auto" >
         
          <div style={{width: 250, height: 30}} className="flex justify-center items-center">
          <FontAwesomeIcon icon={faEnvelope} />
            <a className="email  ml-3 mr-3 inline-block  " role="button">contact@example.com</a>
          </div>
          <div style={{width: 200, height: 30}} className="flex justify-center items-center">
          <FontAwesomeIcon icon={faMobile} />
            <p className="  ml-3 inline-block ">+1 5589 55488 55</p>
          </div>
          <div style={{width: 200, height: 30}} className=' flex  justify-center items-center'>

<span className='inline-block w-[80px]'>Follow Us :</span>
<span className="ml-1"><a href=""> Facebook</a></span>

  
</div>
        </div>
       
      </div>
    </div>
    <nav style={styles.navbar} className="bg-white">
      <div style={styles.logoContainer}>
        <img src="/image.png" alt="Logo" className="w-40" />
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/productsList">Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/services">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <LanguageDropdown/> 
    </nav>
    </div>
  );
};

const styles = {
    navbar: {
        
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px 15px",
        backgroundColor: "var(--foreground)", // Added background color
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "100px",
        paddingTop: "3px",
        color: "white", // Added foreground color
        fontWeight: "bold",
        fontSize: "22px",
    },
    navItem: {
        textDecoration: "none",
        color: "inherit",
    },
};

export default Navbar;

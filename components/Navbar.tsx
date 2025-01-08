import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav style={styles.navbar} className="bg-white">
      <div style={styles.logoContainer}>
        <img src="/image.png" alt="Logo" className="w-40" />
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about">Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/services">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
    navbar: {
        
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "20px 20px",
        backgroundColor: "white", // Added background color
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        marginLeft: "100px",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "100px",
        marginLeft: "100px",
        paddingTop: "3px",
        color: "var(--foreground)", // Added foreground color
        fontWeight: "bold",
        fontSize: "22px",
    },
    navItem: {
        textDecoration: "none",
        color: "inherit",
    },
};

export default Navbar;

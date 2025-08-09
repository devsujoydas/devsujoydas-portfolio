import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-10 gap-4 md:text-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navItems.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.href}
          whileHover={{ scale: 1, color: "lightgray " }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-white transition-all"
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Nav;

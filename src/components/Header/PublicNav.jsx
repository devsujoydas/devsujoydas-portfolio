import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/" },
  { label: "Projects", to: "/" },
  { label: "Skills", to: "/" },
  { label: "Contact", to: "/" },
];

const PublicNav = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-10 gap-4 md:text-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.to}
          className="text-white transition-all"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
};

export default PublicNav;

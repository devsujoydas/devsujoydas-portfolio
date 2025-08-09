import { FiFacebook, FiGithub, FiYoutube } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

const socialLinks = [
    { icon: <FiFacebook className=" text-xl md:text-2xl" />, url: "https://facebook.com/devsujoydas" },
    { icon: <FiGithub className=" text-xl md:text-2xl" />, url: "https://github.com/devsujoydas" },
    { icon: <FaLinkedinIn className=" text-xl md:text-2xl" />, url: "https://www.linkedin.com/in/devsujoydas" },
    { icon: <BsWhatsapp className=" text-xl md:text-2xl" />, url: "http://wa.me/+8801303436299" },
    { icon: <IoLogoInstagram className=" text-xl md:text-2xl" />, url: "https://www.instagram.com/devsujoydas" },
    { icon: <FiYoutube className=" text-xl md:text-2xl" />, url: "https://www.youtube.com/@devsujoydas" },
];

const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

const FindWithMe = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="md:mt-6"
        >
            <motion.h2
                className="text-primary font-semibold text-sm md:text-lg mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                FIND WITH ME
            </motion.h2>

            <motion.div
                className="flex flex-wrap items-center gap-2 md:gap-4"
                variants={container}
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:w-12 w-10  md:h-12 h-10 rounded-full bg-[#3c3c41] hover:bg-transparent border border-transparent hover:border-zinc-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 "
                        variants={item}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    {social.icon}
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FindWithMe;

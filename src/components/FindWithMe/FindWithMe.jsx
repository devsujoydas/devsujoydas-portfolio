import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

const socialLinks = [
    { icon: <FiFacebook className="text-2xl" />, url: "https://facebook.com/devsujoydas" },
    { icon: <FiGithub className="text-2xl" />, url: "https://github.com/devsujoydas" },
    { icon: <FaLinkedinIn className="text-2xl" />, url: "https://www.linkedin.com/in/devsujoydas" },
    { icon: <BsWhatsapp className="text-2xl" />, url: "http://wa.me/+8801303436299" },
    { icon: <IoLogoInstagram className="text-2xl" />, url: "https://www.instagram.com/devsujoydas" },
    { icon: <FiYoutube className="text-2xl" />, url: "https://www.youtube.com/@devsujoydas" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const FindWithMe = () => {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='space-y-5'
            >
                <h1 className='text-primary'>FIND WITH ME</h1>
            </motion.div>

            <motion.div
                className='flex flex-wrap items-center gap-3 mt-3'
                variants={container}
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        className='Btn'
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                    >
                        <span className="svgContainer active:scale-95 transition-all">
                            {social.icon}
                        </span>
                        <span className="BG"></span>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FindWithMe;

import { motion } from "framer-motion";
import ContactBanner from '/images/ContactBanner.png';
import FindWithMe from "../FindWithMe/FindWithMe";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("http://localhost:3000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                alert("✅ Message sent successfully!");
                e.target.reset();
            } else {
                alert("❌ Failed to send message. Try again.");
            }
        } catch (error) {
            alert("⚠️ Server error. Please try later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className="font-montserrat text-white md:py-36 py-20 overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-secondary font-semibold text-center'
            >
                CONTACT
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='md:text-7xl text-4xl font-bold mt-5 text-primary text-center'
            >
                Contact With Me
            </motion.h1>

            <div className="grid md:grid-cols-5 md:gap-8 gap-5 mt-10">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="md:col-span-2 bgMain rounded-2xl shadow-2xl border border-gray-700 md:p-8 p-4 space-y-2 md:space-y-5"
                >
                    <img src={ContactBanner} alt="Handshake" className="w-full h-64 object-cover rounded-xl" />
                    <div className="md:text-[16px] text-sm font-medium">
                        <h2 className="text-2xl font-bold">Sujoy Das</h2>
                        <p className="text-zinc-400">Frontend Web Developer.</p>
                        <p className="mt-4  text-zinc-300">
                            I'm always open to networking and discussing potential collaborations. Connect with me through this form or find me on:
                        </p>
                        <div className="md:mt-4 mt-2 space-y-1 md:space-y-2 text-zinc-300 ">
                            <a className='block' href="tel:+8801303436299" target='_blank'>Phone: <span className='hover:text-[#FF014F] transition-all duration-500'>+880 1303-436299</span></a>
                            <a className='block' href='mailto:devsujoydas@gmail.com' target='_blank'>Email: <span className='hover:text-[#FF014F] transition-all duration-500'>devsujoydas@gmail.com</span></a>
                        </div>
                    </div>
                    <FindWithMe />
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.form
                    onSubmit={handleContactSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="md:col-span-3 bgMain flex flex-col justify-between border border-gray-700 space-y-2 md:text-[16px] text-sm md:space-y-4 p-6 rounded-2xl shadow-xl"
                >
                    <div className="grid  md:grid-cols-2 gap-2 md:gap-4 ">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input required name="name" type="text" placeholder="Your Name" className="border border-zinc-500 bg-transparent outline-none md:mt-4 mt-1 text-white p-2 md:p-4 rounded-md w-full" />
                        </div>
                        <div>
                            <label htmlFor="phone">Your Number</label>
                            <input required name="phone" type="text" placeholder="Phone Number" className="border border-zinc-500 bg-transparent outline-none md:mt-4 mt-1 text-white p-2 md:p-4 rounded-md w-full" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Your Email</label>
                        <input required name="email" type="email" placeholder="Email" className="border border-zinc-500 bg-transparent outline-none md:mt-4 mt-1 text-white p-2 md:p-4 rounded-md w-full" />
                    </div>

                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input required name="subject" type="text" placeholder="Subject" className="border border-zinc-500 bg-transparent outline-none md:mt-4 mt-1 text-white p-2 md:p-4 rounded-md w-full" />
                    </div>

                    <div>
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" placeholder="Your Message" className="border border-zinc-500 bg-transparent outline-none md:mt-4 mt-1 text-white p-2 md:p-4 rounded-md w-full md:h-32"></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white active:scale-95 font-semibold py-3 md:py-4 cursor-pointer border border-transparent md:text-[16px] text-xs rounded-lg transition-all duration-500 ${
                            loading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-[#3c3c41] hover:border-zinc-600 hover:bg-transparent"
                        }`}
                    >
                        {loading ? "SENDING..." : "SEND MESSAGE →"}
                    </button>
                </motion.form>
            </div>
        </div>
    );
}

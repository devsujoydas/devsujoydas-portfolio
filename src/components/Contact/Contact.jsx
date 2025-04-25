
import ContactBanner from '/SkillsImgs/ContactBanner.png'
import FindWithMe from "../FindWithMe/FindWithMe";

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen font-montserrat text-white p-4 md:py-40 py-20">

            <h1 className='text-secondary font-semibold text-center'>CONTACT</h1>
            <h1 className='md:text-7xl text-4xl font-bold mt-5 text-primary text-center'>Contact With Me
            </h1>

            <div className="max-w-7xl mx-auto grid md:grid-cols-5 md:gap-13 gap-5 mt-10">

                {/* Left Side */}
                <div className="md:col-span-2  rounded-2xl shadow-2xl border border-gray-700 md:p-8 p-4 space-y-6">
                    <img
                        src={ContactBanner}
                        alt="Handshake"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Sujoy Das</h2>
                        <p className="text-zinc-400">Frontend Web Developer.</p>
                        <p className="mt-4 text-zinc-300">
                            I'm always open to networking and discussing potential collaborations. Connect with me through this form or find me on:
                        </p>
                        <div className="mt-4 space-y-2 text-zinc-300">
                            <p>Phone: +880 1303-436299</p>
                            <p>Email: sdsujoy920243@gmail.com</p>
                        </div>
                    </div>

                    {/* Find With Me Social Icons */}
                    <FindWithMe />
                </div>

                {/* Right Side - Contact Form */}
                <form className="md:col-span-3 border border-gray-700 space-y-4 bg-[#212428] p-6 rounded-2xl shadow-xl">
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="bg-[#191B1E] mt-4 text-white p-4 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Your Number</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Phone Number"
                                className="bg-[#191B1E] mt-4 text-white p-4 rounded-md w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Your Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="bg-[#191B1E] mt-4 text-white p-4 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            className="bg-[#191B1E] mt-4 text-white p-4 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className="bg-[#191B1E] mt-4 text-white p-4 rounded-md w-full h-32"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-secondary font-semibold py-4 rounded-lg bg-gray-800"
                    >
                        SEND MESSAGE →
                    </button>

                </form>
            </div>
        </div>
    );
}
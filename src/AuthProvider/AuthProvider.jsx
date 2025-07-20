import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()

import xenonmedia from "/images/projectimages/xenonmedia-thumbnail.webp"
import elexyelectronics from "/images/projectimages/elexyelectronics-thumbnail.webp"
import tourtotuscany from "/images/projectimages/tourtotuscany-thumbnail.webp"
import reactcareerhub from "/images/projectimages/reactcareerhub-thumbnail.webp"
import nestmartbd from "/images/projectimages/nestmartbd-thumbnail.webp"
import residential from "/images/projectimages/residential-thumbnail.webp"

import xenonmedia1 from "/images/projectimages/xenonmedia1-thumbnail.webp"
import elexyelectronics1 from "/images/projectimages/elexyelectronics1-thumbnail.webp"
import reactcareerhub1 from "/images/projectimages/reactcareerhub1-thumbnail.webp"
import tourtotuscany1 from "/images/projectimages/tourtotuscany1-thumbnail.webp"
import nestmartbd1 from "/images/projectimages/nestmartbd1-thumbnail.webp"
import residential1 from "/images/projectimages/residential1-thumbnail.webp"


const AuthProvider = ({ children }) => {

    const projectsData =
        [
            {
                "serial": 0,
                "id": "xenonmedia",
                "name": "Xenon Media - Mini Social App",
                "description": "A mini social media platform to post, like, and interact—built with modern React tools.",
                "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS", "NodeJS", "ExpressJS", "MongoDB"],
                "image": `${xenonmedia}`,
                "image2": `${xenonmedia1}`,
                "links": [
                    { "label": "Website", "href": "https://xenonmedia.netlify.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/mini-social-app" },
                    { "label": "server Code", "href": "https://github.com/devsujoydas/mini-social-app-server" },
                ],
                "projectDetails": {
                    "purpose": "Social engagement platform – post and interact",
                    "features": [
                        "User auth via Firebase",
                        "Create/read/update/delete posts",
                        "Like functionality",
                        "Interactive SwiperJS feed sections"
                    ],
                    "backend": [
                        "NodeJS/Express REST API",
                        "MongoDB for post storage",
                        "Firebase for authentication"
                    ],
                    "suggested_improvements": [
                        "Add user profiles and avatars",
                        "Implement real-time notifications",
                        "Optimize image uploads with compression"
                    ]
                }
            },
            {
                "serial": 1,
                "id": "nestmartbd",
                "name": "Nest Mart BD",
                "description": "User-friendly online store offering various products to enhance daily life and convenience.",
                "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS", "NodeJS", "ExpressJS", "MongoDB"],
                "image": `${nestmartbd}`,
                "image2": `${nestmartbd1}`,
                "links": [
                    { "label": "Website", "href": "https://nestmartbd.vercel.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/nest-mart-grocery-client" },
                    { "label": "server Code", "href": "https://github.com/devsujoydas/nest-mart-grocery-server" },
                ],
                "projectDetails": {
                    "purpose": "E‑commerce storefront for Bangladesh market",
                    "features": [
                        "Product listing with categories and images",
                        "Shopping cart managed with React state",
                        "Checkout with Firebase user handling",
                        "Responsive carousel using SwiperJS"
                    ],
                    "backend": [
                        "Express server for handling orders",
                        "MongoDB for product & order data"
                    ],
                    "suggested_improvements": [
                        "Integrate payment gateway (e.g., PayPal, Stripe)",
                        "Add search and filter UI for products",
                        "Implement order history and admin panel"
                    ]
                }
            },
            {
                "serial": 2,
                "id": "residentialrealestate",
                "name": "Residential Real Estate",
                "description": "Real estate platform to discover, list, and explore apartments, townhouses, and vacation rentals.",
                "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
                "image": `${residential}`,
                "image2": `${residential1}`,
                "links": [
                    { "label": "Website", "href": "https://residentialrealestate.vercel.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/residential-real-estate" },
                    { "label": "server Code", "href": "https://github.com/devsujoydas/residential-real-estate-server" },
                ],
                "projectDetails": {
                    "purpose": "Property listing & search for rentals/sales",
                    "features": [
                        "Property cards with images & details",
                        "SwiperJS gallery on property pages",
                        "Firebase auth for saved properties"
                    ],
                    "suggested_improvements": [
                        "Add map integration (Google Maps API)",
                        "Allow owner submissions or inquiries",
                        "Advanced filters: price, location, size"
                    ]
                }
            },

            {
                "serial": 3,
                "id": "tourtotuscany",
                "name": "Tour To Tuscany",
                "description": "Travel site for Tuscany, offering guides, experiences, and easy tour package bookings online.",
                "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
                "image": `${tourtotuscany}`,
                "image2": `${tourtotuscany1}`,
                "links": [
                    { "label": "Website", "href": "https://tourtotuscany.vercel.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/tour-to-tuscany" },
                    { "label": "server Code", "href": "" },
                ],
                "projectDetails": {
                    "purpose": "Showcase Tuscany tours & attractions",
                    "features": [
                        "Tour listing cards with images",
                        "Detailed tour pages",
                        "SwiperJS hero banners",
                        "Firebase email inquiries"
                    ],
                    "suggested_improvements": [
                        "Booking/payment integration",
                        "User reviews & ratings",
                        "Multi-language support (e.g. Italian/English)"
                    ]
                }
            },
            {
                "serial": 4,
                "id": "reactcareerhub",
                "name": "Job Portal BD",
                "description": "Job and career guidance platform helping users explore opportunities and career resources effectively.",
                "tech": ["React", "Tailwind CSS", "Firebase"],
                "image": `${reactcareerhub}`,
                "image2": `${reactcareerhub1}`,
                "links": [
                    { "label": "Website", "href": "https://reactcareerhub.vercel.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/react-career-hub" },
                    { "label": "server Code", "href": "" },
                ],
                "projectDetails": {
                    "purpose": "Career discovery and job listings",
                    "features": [
                        "Searchable job listings",
                        "Firebase auth for user sign-in",
                        "Career resources or blog section"
                    ],
                    "suggested_improvements": [
                        "Allow CV upload and apply function",
                        "Admin dashboard for job posting",
                        "Email alerts for new matching jobs"
                    ]
                }
            },

            {
                "serial": 5,
                "id": "elexyelectronics",
                "name": "Elexy Electronics",
                "description": "Electronics e-commerce site offering a wide range of gadgets with smooth shopping experience.",
                "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
                "image": `${elexyelectronics}`,
                "image2": `${elexyelectronics1}`,
                "links": [
                    { "label": "Website", "href": "https://elexyelectronics.vercel.app" },
                    { "label": "client Code", "href": "https://github.com/devsujoydas/elexy-electronics." },
                    { "label": "server Code", "href": "." },
                ],
                "projectDetails": {
                    "purpose": "E‑commerce template for electronics",
                    "features": [
                        "Responsive product listings",
                        "SwiperJS product carousels",
                        "User login via Firebase"
                    ],
                    "suggested_improvements": [
                        "Checkout/payment flow",
                        "Product search filters",
                        "Admin product management panel"
                    ]
                }
            },

        ]









    const data = {
        projectsData,
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
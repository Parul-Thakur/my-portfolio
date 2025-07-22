// projectsData.js
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJs,
  FaMapMarkedAlt,
  FaReact,
  FaJsSquare,
  FaChartArea,
  FaTable,
  FaCcPaypal,
  FaJava,
  FaBootstrap,
  FaUserShield,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiEjs,
  SiPassport,
  SiCloudinary,
  SiMaterialdesignicons,
  SiGooglemaps,
  SiVitess,
  SiShadcnui,
  SiGooglegemini,
  SiGoogledataproc,
  SiGraphql,
  SiClerk,
  SiResend,
  SiSpringboot,
  SiThymeleaf,
  SiMysql,
  SiJsonwebtokens,
  SiReactrouter,
  SiMaterialdesign,
  SiFramer,
  SiStyledcomponents,
} from "react-icons/si";
import { BsFillLockFill } from "react-icons/bs";
import { MdSecurity, MdStorage, MdAltRoute, MdEmail } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import { features } from "process";
const projects = [
   {
    id: 1,
    title: "AI Travel Planner",
    imageLaptop: "/AIPlannerImages/a-1.png",
    images: [
      "/AIPlannerImages/AiPlanner1.png",
      "/AIPlannerImages/AiPlanner2.png",
      "/AIPlannerImages/AiPlanner3.png",
      "/AIPlannerImagesAiPlanner4.png",
      "/AIPlannerImages/AiPlanner5.png",
    ],
    overview:
      "AI Travel Planner is a modern web application designed to simplify trip planning using Google Generative AI. It creates personalized travel itineraries using Google Gemini AI, with smart location input, user authentication, and a sleek, responsive UI.",
    description:
      "This project integrates Google Gemini AI to automatically generate personalized travel itineraries based on user input. Built with React 18 and Vite for high performance, it features Firebase authentication and storage, Google Places for smart location input, and a sleek UI powered by TailwindCSS and ShadCN components. With smooth animations, popovers, dialogs, and theme switching, this app offers a delightful user experience for travel planning.",
    features: [
      "AI-Generated Itineraries: Uses Google Gemini AI to generate travel plans based on user input.",
      "Smart Location Input: Autocomplete locations with Google Places API.",
      "Authentication & Storage: Firebase handles login and user data securely.",
      "Modern UI: TailwindCSS combined with ShadCN UI for a clean and elegant design.",
      "Enhanced UX: Popovers, dialogs and ShadCN components.",
      "Dark/Light Mode: Theme toggle support using next-themes.",
    ],
    techStack: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Vite", icon: <SiVitess className="text-purple-500" /> },
      ,
      { name: "ShadCN UI", icon: <SiShadcnui className="text-pink-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-300" /> },
      {
        name: "Google Gemini AI",
        icon: <SiGooglegemini className="text-yellow-300" />,
      },
      {
        name: "Google Places API",
        icon: <SiGoogledataproc className="text-yellow-300" />,
      },
    ],
    github: "https://github.com/Parul-Thakur/ai-trip-planner-web",
    liveDemo:
      "https://ai-trip-planner-web-mggk-3ufxy4t18-parul-thakurs-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Secure Print Dashboard ",
    imageLaptop: "/AdminImages/c-1.png",
    images: [
      "/AdminImages/admin1.png",
      "/AdminImages/admin2.png",
      "/AdminImages/admin3.png",
      "/AdminImages/admin4.png",
    ],
    description:
      "The Secure Print Dashboard is a robust frontend application designed specifically for managing print operations within organizations.",

    overview:
      "The Secure Print Dashboard is a dynamic frontend application built with ReactJS and Material-UI. It features interactive data tables, real-time visual insights, theme toggling, and seamless navigation between multiple web applications. The project is designed to enhance user experience by providing a responsive and intuitive UI for managing print-related data.",
    features: [
      "Interactive Data Tables: Search, sort, and filter functionalities for efficient data management.",
      "Real-Time Data Insights: Graphical representation of key metrics using dashboard charts.",
      "Theme Toggling: Switch between light and dark themes for a customizable user experience.",
      "Multi-App Navigation: Easily toggle between different web applications within the dashboard.",
      "Responsive UI: Built with Material-UI components to ensure a smooth and consistent experience across devices.",
    ],
    techStack: [
      { name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
      {
        name: "Material-UI",
        icon: <SiMaterialdesignicons className="text-teal-600" />,
      },
      {
        name: "Chart.js",
        icon: <FaChartArea className="text-indigo-600" />,
      },

      {
        name: "React Router",
        icon: <MdAltRoute className="text-blue-700" />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion className="text-white" />,
      },
      {
        name: "React Table",
        icon: <FaTable className="text-red-400" />,
      },
    ],
    github: "https://github.com/Parul-Thakur/administration-web-app",
    liveDemo: "https://administration-web-app.vercel.app/dashboard",
  },
   {
  id: 3,
  title: " Secure Print Web ",
  imageLaptop: "/CWebImages/c-w-1.png",
  images: [
    "/CWebImages/caleta1.png",
    "/CWebImages/caleta2.png",
    "/CWebImages/caleta3.png",
    "/CWebImages/caleta4.png",
    "/CWebImages/caleta5.png",
  ],
  overview:
    "A web application that enables users to upload documents, manage print jobs, and add money to their printing account easily.It streamlines the printing process with secure account management, top-up options, and document history tracking.",
  description:
    "Caleta is a user-friendly printing web app where users can upload their files for printing, top up their account balance, and print remotely. It offers a secure login system, pricing management, and history tracking for all print jobs. The app is built with React, React Router, Material UI, and Framer Motion for smooth animations.",
  features: [
    "User Authentication and secure login system",
    "Upload and manage printable documents",
    "Top-up account balance for printing credits",
    "Remote print capabilities",
    "View history of print jobs",
    "Dynamic pricing schemes with edit options",
    "Reset PIN functionality for added security",
  ],
  techStack: [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-blue-500" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-blue-700" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-purple-600" /> },
  ],
  github: "https://github.com/Parul-Thakur/c-web",
  liveDemo: "https://c-web-kappa.vercel.app/", // Replace with live URL if deployed
},
    {
    id: 4,
    title: " Realtor Clone",
    imageLaptop: "/RealtorImages/r-1.png",
    images: [
      "/RealtorImages/realtor1.png",
      "/RealtorImages/realtor2.png",
      "/RealtorImages/realtor3.png",
      "/RealtorImages/realtor4.png",
      "/RealtorImages/realtor5.png",
    ],
    overview:
      "This is a full-featured real estate platform developed with React, Firebase, and Google Authentication.It allows users to browse, manage, and list properties, with features like interactive Google Maps, reviews, and a responsive Tailwind CSS design. ",
    description:
      "A modern real estate web application allowing users to sign up and sign in securely using Google Authentication. The platform supports browsing property listings, managing rentals and sales, and connecting with property owners through reviews and contact features. The dashboard empowers users to manage their listings efficiently with edit and delete capabilities, all styled with Tailwind CSS for responsiveness.",
    features: [
      "User Authentication: Secure sign-up and sign-in with Google Authentication.",
      "Property Listings: Users can rent, sell, and browse properties.",
      "Google Maps Integration: Interactive property location visualization.",
      "Reviews & Contact: Users can leave reviews and contact property owners via email.",
      "Dashboard: Manage property listings with editing, updating, and deletion options.",
      "Responsive UI: Built using Tailwind CSS for a seamless user experience.",
    ],
    techStack: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-300" /> },
      {
        name: "Google Maps API",
        icon: <SiGooglemaps className="text-green-400" />,
      },
    ],
    github: "https://github.com/Parul-Thakur/realtor-clone-react",
    videoDemo: "https://1drv.ms/v/c/0be1fbd1ce9f69fe/Ef5pn87R--EggAsF5gMAAAABqVS4q3KhECYyMfMOg7j0Aw?e=6cF34X",
  },



  {
    id: 5,
    title: "Foodie Cart",
    imageLaptop: "/FoodCartImages/f-1.png",
    images: [
      "/FoodCartImages/food1.png",
      "/FoodCartImages/food2.png",
      "/FoodCartImages/food3.png",
      "/FoodCartImages/food4.png",
      "/FoodCartImages/food5.png",
      "/FoodCartImages/food6.png",
    ],
    overview:
      "Foodie Cart is a modern full-featured food ordering app built with Next.js 14.It offers dynamic restaurant listings, secure Clerk authentication, PayPal checkout, and a sleek UI built with TailwindCSS and ShadCN UI.",
    description:
      "Foodie Cart simplifies the online food ordering experience with dynamic restaurant listings, categorized menus, a PayPal-integrated cart system, and secure Clerk-based authentication. With data powered by Hygraph CMS and email support via Resend, the platform is scalable, user-friendly, and ideal for modern food delivery services. Shadcn UI and toast notifications ensure a polished, interactive user experience.",
    features: [
      "Category-Based Restaurant Browsing: Explore restaurants by cuisine type such as Pizza, Indian, BBQ, and more.",
      "Detailed Menus: View items with rich descriptions, categorized by type and pricing.",
      "Cart & Checkout: Add items to cart and securely pay using PayPal.",
      "Review System: Leave ratings and reviews for restaurants and dishes.",
      "Clerk Authentication: Secure login, sign-up, and user management.",
      "Resend Email Support: Automated and transactional emails for users.",
      "Sleek UI/UX: Styled with TailwindCSS and built using shadcn/ui components.",
      "Toast Notifications: Real-time feedback using Sonner for user interactions.",
    ],
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      ,
      { name: "ShadCN UI", icon: <SiShadcnui className="text-pink-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Hygraph (GraphCMS)",
        icon: <SiGraphql className="text-pink-300" />,
      },
      {
        name: "Clerk",
        icon: <SiClerk className="text-white-300" />,
      },
      {
        name: "PayPal SDK",
        icon: <FaCcPaypal className="text-blue-300" />,
      },
      {
        name: "Resend",
        icon: <SiResend className="text-white-300" />,
      },
    ],
    github: "https://github.com/Parul-Thakur/foodie-cart",
    liveDemo: "https://foodie-cart-eiu9.vercel.app",
  },
   {
    id: 6,
    title: "Campsite Chronicles",
    imageLaptop: "/CampsiteImages/p-1.png",
    images: [
      "/CampsiteImages/campsite1.png",
      "/CampsiteImages/campsite2.png",
      "/CampsiteImages/campsite3.png",
      "/CampsiteImages/campsite4.png",
    ],
    description:
      "Campsite Chronicles is a comprehensive website designed to provide camping resources and foster a community of outdoor enthusiasts. Whether you're a seasoned camper or just starting out, Campsite Chronicles offers a range of features and information to enhance your camping experience.",

    overview:
      "Campsite Chronicles is a full-stack web application built to support a vibrant community of outdoor and camping enthusiasts. Designed with a focus on usability, security, and community-driven content, the platform enables users to discover, share, and interact with campground experiences",
    features: [
      "User & Admin Authentication using Passport.js",
      "Create, Edit, Delete Posts & Comments with ownership validation",
      "Campground Photo Uploads via Cloudinary",
      "Responsive UI for mobile, tablet, and desktop",
    ],
    techStack: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "EJS", icon: <SiEjs className="text-purple-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
      { name: "Passport.js", icon: <SiPassport className="text-indigo-600" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      {
        name: "Express-Session",
        icon: <BsFillLockFill className="text-blue-600" />,
      },
      { name: "Connect-Mongo", icon: <FaDatabase className="text-teal-500" /> },
      {
        name: "Mapbox SDK",
        icon: <FaMapMarkedAlt className="text-green-700" />,
      },
    ],
    github: "https://github.com/Parul-Thakur/campsite-chronicles",
    videoDemo: "https://1drv.ms/v/c/0be1fbd1ce9f69fe/Ef5pn87R--EggAsI5gMAAAABxaI0YUDvKhELZGdyr0qa4g?e=qWvfmf",
  },
  {
    id: 7,
    title: "Zing Shopping",
    imageLaptop: "/ZingImages/z-1.png",
    images: [
      "/ZingImages/zing1.png",
      "/ZingImages/zing2.png",
      "/ZingImages/zing3.png",
      "/ZingImages/zing4.png",
      "/ZingImages/zing5.png",
      "/ZingImages/zing6.png",
    ],
    description:
      "Zing Shopping is an end-to-end E-Commerce Dashboard solution using Java Spring Boot and Thymeleaf. It offers both a user-friendly storefront and a feature-rich admin panel for managing the online shop.",
    overview:
      "A full-featured e-commerce web application built using Java Spring Boot and Thymeleaf. Zing Shopping provides secure login for users and admins, product filtering, cart management, checkout, and an admin panel for inventory and user control.",
    features: [
      "User Registration & Login with Forgot Password via Email",
      "Product Browsing with Category Filtering",
      "Cart Functionality with Quantity Management",
      "Secure Checkout & Payment Processing",
      "Admin Panel to Manage Products, Categories, Orders, and Users",
    ],
    techStack: [
      { name: "Java", icon: <FaJava className="text-red-700" /> },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-green-600" />,
      },
      { name: "Thymeleaf", icon: <SiThymeleaf className="text-green-800" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-600" /> },
      {
        name: "Spring Security",
        icon: <FaUserShield className="text-blue-700" />,
      },
      { name: "JavaMailSender", icon: <MdEmail className="text-red-500" /> },
      { name: "Database", icon: <FaDatabase className="text-teal-600" /> },
    ],
    github: "https://github.com/Parul-Thakur/Zing-Shopping",
    videoDemo: "https://1drv.ms/v/c/0be1fbd1ce9f69fe/Ef5pn87R--EggAsG5gMAAAABXohZPI9rGYvpwgNsxkcjNQ?e=r0gYOo",
    
  },
];

export default projects;

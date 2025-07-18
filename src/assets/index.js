import { IoHome } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

export const copyright = <FaRegCopyright />;

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <IoHome />,
  },
  {
    id: "about",
    name: "About",
    icon: <FaUserCheck />,
  },

  {
    id: "projects",
    name: "Projects",
    icon: <GoProject />,
  },

  {
    id: "contact",
    name: "Contact",
    icon: <MdContactMail />,
  },
];

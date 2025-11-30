"use client";

import { BsMoonFill } from "react-icons/bs";
import { IoMdRestaurant } from "react-icons/io";
import {
    Navbar,
    Typography,
} from "./materialTailwind";
import useScrollNavbar from "@/hooks/useScrollNavbar";

const NavBar = () => {
    const show = useScrollNavbar();

    return (
        <Navbar
            className={`fixed top-0 z-50 w-full max-w-full py-2 shadow-md !bg-white rounded-none transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    <IoMdRestaurant className="text-3xl" />
                </Typography>
                <div className="flex items-center gap-x-2">
                    <button
                        className="text-sm font-medium focus:outline-none"
                    >
                        <span>Create an account</span>
                    </button>
                    <button
                        className="bg-black text-white text-sm py-[8px] px-2 rounded-[10px] font-medium focus:outline-none"
                    >
                        <span>Log in</span>
                    </button>
                    <button
                        className="text-md"
                    >
                        <BsMoonFill className="transform -scale-x-100" />
                    </button>
                </div>
            </div>
        </Navbar>
    );
}

export default NavBar
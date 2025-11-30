"use client";

import { useState, useEffect, useCallback } from "react";

const useScrollNavbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        const currentScrollY = window.scrollY;
        setShow(currentScrollY <= lastScrollY);
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [controlNavbar]);

    return show;
};

export default useScrollNavbar;

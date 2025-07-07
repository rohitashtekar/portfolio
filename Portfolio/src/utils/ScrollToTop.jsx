import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0); // Scroll to top-left of the window
    }, [pathname]); // Runs every time the route/path changes

    return (null);
}

export default ScrollToTop
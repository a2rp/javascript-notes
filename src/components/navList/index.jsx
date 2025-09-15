import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Styled } from "./styled";

const NavListCore = () => {
    const navRef = useRef(null);
    const { pathname } = useLocation();

    // Keep the active NavLink centered/visible in the sidebar
    useEffect(() => {
        const el = navRef.current?.querySelector("a.active");
        if (!el) return;

        // small delay so NavLink receives the .active class after route update
        const id = requestAnimationFrame(() => {
            try {
                el.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
            } catch {
                // older browsers fallback
                el.scrollIntoView();
            }
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    return (
        <Styled.Nav ref={navRef} aria-label="JavaScript Core navigation">
            <h2 style={{ margin: 0 }}>
                <NavLink
                    to="/about"
                    title="About"
                    style={{
                        display: "block",
                        padding: 0,
                        margin: 0
                    }}
                >
                    About
                </NavLink>

                <NavLink
                    to="/home"
                    title="JavaScript Notes"
                    style={{
                        display: "block",
                        padding: 0,
                        margin: 0
                    }}
                >
                    JavaScript Notes
                </NavLink>
            </h2>
        </Styled.Nav>
    );
};

export default NavListCore;

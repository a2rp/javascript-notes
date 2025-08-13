import { useEffect, useState } from "react";
import { Styled } from "../Styled";

export default function GoToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        onScroll(); // check initial
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!show) return null;
    return (
        <Styled.GoTopBtn onClick={scrollTop} aria-label="Go to top" title="Go to top">
            ↑
        </Styled.GoTopBtn>
    );
}

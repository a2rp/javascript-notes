import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 10000;
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 1px solid #555;
    border-radius: 50%;
    color: #fff;
    background: #111820;
    box-shadow: 0 10px 24px #0008;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

    &.isVisible { opacity: 1; pointer-events: auto; }
    &:hover, &:focus-visible { border-color: #aaa; box-shadow: 0 0 0 3px #ffffff14, 0 12px 26px #0008; text-shadow: 0 0 10px #ffffff66; outline: none; }
`;

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollArea = document.getElementById("scroll-root");
        if (!scrollArea) return undefined;
        const handleScroll = () => setVisible(scrollArea.scrollTop > 220);
        handleScroll();
        scrollArea.addEventListener("scroll", handleScroll, { passive: true });
        return () => scrollArea.removeEventListener("scroll", handleScroll);
    }, []);

    return <Button className={visible ? "isVisible" : ""} type="button" aria-label="Scroll to top" onClick={() => document.getElementById("scroll-root")?.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp aria-hidden="true" /></Button>;
}

import React, { useId, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid hsl(0 0% 100% / 0.14);
  border-radius: 12px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`;

const Trigger = styled.button`
  width: 100%;
  text-align: left;
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 14px 16px;
  background: transparent; color: inherit; border: 0; cursor: pointer;
  font-size: 15px; letter-spacing: 0.2px;
  &:hover { background: hsl(0 0% 100% / 0.05); }
`;

const Chevron = styled.span`
  display: inline-block; transition: transform 180ms ease;
  transform: rotate(${p => (p.$open ? 180 : 0)}deg);
`;

const Panel = styled.div`
  padding: ${p => (p.$open ? "12px 16px 16px" : "0 16px")};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${p => (p.$open ? "block" : "none")};
`;

const Code = ({ children }) => (
    <pre style={{
        margin: "8px 0 12px",
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid hsl(0 0% 100% / 0.12)",
        background: "hsl(0 0% 100% / 0.04)",
        overflowX: "auto",
        lineHeight: 1.5,
        fontSize: 13.5
    }}>{children}</pre>
);

export default function QnaItem({ question, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    const id = useId();
    return (
        <Wrap>
            <Trigger
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(o => !o)}
            >
                <span>{question}</span>
                <Chevron $open={open}>⌄</Chevron>
            </Trigger>

            <Panel id={`${id}-panel`} role="region" $open={open}>
                {/* answer content goes here */}
                {typeof children === "string" ? <p>{children}</p> : children}
            </Panel>
        </Wrap>
    );
}

export { Code };

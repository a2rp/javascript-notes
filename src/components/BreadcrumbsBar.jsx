import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.nav`
  display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
  font-size: 13px; opacity: .9;
  a { color: inherit; text-decoration: none; border-bottom: 1px dotted transparent; }
  a:hover { border-bottom-color: currentColor; }
  [aria-current="page"] { opacity: .7; }
`;
const Sep = styled.span`opacity: .5; margin: 0 2px;`;

const LABELS = {
    "": "Home",
    javascript: "JavaScript",
    reactjs: "React",
    node: "Node",
    theory: "Theory",
    programs: "Programs",
    about: "About",
};

export default function BreadcrumbsBar() {
    const { pathname } = useLocation();                // e.g. "/javascript/theory"
    const segs = pathname.replace(/^\/+|\/+$/g, "")
        .split("/")
        .filter(Boolean);

    const crumbs = [{ href: "/", label: "Home" }];
    let acc = "";
    for (const s of segs) {
        acc += `/${s}`;
        const label = LABELS[s] ?? s.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase());
        crumbs.push({ href: acc, label });
    }

    return (
        <Bar aria-label="Breadcrumb">
            {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                    <span key={c.href}>
                        {last ? <span aria-current="page">{c.label}</span> : <NavLink to={c.href}>{c.label}</NavLink>}
                        {!last && <Sep>›</Sep>}
                    </span>
                );
            })}
        </Bar>
    );
}

import{d as n,r as g,u as m,a as b,j as e,N as s}from"./index-D-LIWgri.js";const o="1px solid hsl(0 0% 100% / 0.10)",f="hsl(0 0% 100% / 0.02)",l="hsl(0 0% 100% / 0.70)",p="0 0 0 3px hsl(200 80% 60% / 0.35)",t={Page:n.main`
        min-height: 100dvh;
        display: grid;
        place-items: center;
        padding: 24px;
    `,Container:n.div`
        width: min(960px, 100%);
    `,Card:n.section`
        background: ${f};
        border: ${o};
        border-radius: 18px;
        padding: clamp(20px, 4vw, 44px);
        display: grid;
        gap: 16px;
        text-align: center;
        backdrop-filter: blur(6px);
    `,Code:n.div`
        font-weight: 800;
        line-height: 1;
        font-size: clamp(64px, 18vw, 160px);
        letter-spacing: 2px;
        background: radial-gradient(
                1200px 1200px at 50% -20%,
                hsl(200 90% 60% / 0.9),
                transparent 60%
            ),
            conic-gradient(
                from 200deg at 50% 50%,
                hsl(280 80% 70%),
                hsl(200 80% 60%),
                hsl(160 80% 60%),
                hsl(320 80% 70%),
                hsl(280 80% 70%)
            );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        filter: drop-shadow(0 6px 28px hsl(200 80% 60% / 0.25));
    `,Title:n.h1`
        margin: 0;
        font-size: clamp(22px, 3.5vw, 32px);
        font-weight: 700;
    `,Subtitle:n.p`
        margin: 0;
        color: ${l};
        font-size: clamp(14px, 2.4vw, 16px);
    `,PathHint:n.p`
        margin: 2px 0 10px;
        color: ${l};
        font-size: 13px;

        & > span {
            opacity: 0.8;
            margin-right: 6px;
        }

        & code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
            background: hsl(0 0% 100% / 0.06);
            border: ${o};
            padding: 2px 6px;
            border-radius: 8px;
            font-size: 12px;
        }
    `,SearchForm:n.form`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 10px;
        margin-top: 4px;

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:n.input`
        height: 44px;
        padding: 0 14px;
        border-radius: 12px;
        border: ${o};
        background: hsl(0 0% 100% / 0.04);
        color: inherit;
        outline: none;

        &:focus-visible {
            box-shadow: ${p};
        }

        &::placeholder {
            color: hsl(0 0% 100% / 0.45);
        }
    `,Actions:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 6px;
    `,Button:n.a`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        padding: 0 14px;
        border-radius: 12px;
        border: ${o};
        background: hsl(0 0% 100% / 0.03);
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        user-select: none;
        transition: transform 120ms ease, background 120ms ease,
            box-shadow 120ms ease;

        &:hover {
            background: hsl(0 0% 100% / 0.06);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }

        &:focus-visible {
            box-shadow: ${p};
            outline: none;
        }
    `,Small:n.p`
        margin: 8px 0 0;
        font-size: 12px;
        color: ${l};
    `},w=({homePath:r="/",indexPath:j="/",enableSearch:c=!0})=>{const[a,x]=g.useState(""),h=m(),d=b(),u=i=>{i.preventDefault(),a.trim()&&d(`/search?q=${encodeURIComponent(a.trim())}`)};return e.jsx(t.Page,{children:e.jsx(t.Container,{children:e.jsxs(t.Card,{role:"region","aria-labelledby":"nf-title",children:[e.jsx(t.Code,{"aria-hidden":!0,children:"404"}),e.jsx(t.Title,{id:"nf-title",children:"Route not found"}),e.jsx(t.Subtitle,{children:"This URL doesn't match any current pages. It may be outdated, renamed, or in a private draft."}),e.jsxs(t.PathHint,{children:[e.jsx("span",{children:"Requested:"})," ",e.jsx("code",{children:h.pathname})]}),c&&e.jsxs(t.SearchForm,{onSubmit:u,role:"search","aria-label":"Search notes",children:[e.jsx(t.Input,{type:"search",placeholder:"Search notes, topics, or keywords…",value:a,onChange:i=>x(i.target.value),"aria-label":"Search query",autoComplete:"off"}),e.jsx(t.Button,{as:s,to:r,children:"Search"})]}),e.jsxs(t.Actions,{children:[e.jsx(t.Button,{as:s,to:r,children:"Go to Home"}),e.jsx(t.Button,{as:s,to:r,children:"Browse All Notes"}),e.jsx(t.Button,{as:"button",type:"button",onClick:()=>d(-1),children:"Go Back"})]})]})})})};export{w as default};

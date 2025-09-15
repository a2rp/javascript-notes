import styled from "styled-components";

const border = "1px solid hsl(0 0% 100% / 0.10)";
const bgPanel = "hsl(0 0% 100% / 0.02)";
const textMuted = "hsl(0 0% 100% / 0.70)";
const ring = "0 0 0 3px hsl(200 80% 60% / 0.35)";

export const Styled = {
    Page: styled.main`
        min-height: 100dvh;
        display: grid;
        place-items: center;
        padding: 24px;
    `,

    Container: styled.div`
        width: min(960px, 100%);
    `,

    Card: styled.section`
        background: ${bgPanel};
        border: ${border};
        border-radius: 18px;
        padding: clamp(20px, 4vw, 44px);
        display: grid;
        gap: 16px;
        text-align: center;
        backdrop-filter: blur(6px);
    `,

    Code: styled.div`
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
    `,

    Title: styled.h1`
        margin: 0;
        font-size: clamp(22px, 3.5vw, 32px);
        font-weight: 700;
    `,

    Subtitle: styled.p`
        margin: 0;
        color: ${textMuted};
        font-size: clamp(14px, 2.4vw, 16px);
    `,

    PathHint: styled.p`
        margin: 2px 0 10px;
        color: ${textMuted};
        font-size: 13px;

        & > span {
            opacity: 0.8;
            margin-right: 6px;
        }

        & code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
            background: hsl(0 0% 100% / 0.06);
            border: ${border};
            padding: 2px 6px;
            border-radius: 8px;
            font-size: 12px;
        }
    `,

    SearchForm: styled.form`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 10px;
        margin-top: 4px;

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    Input: styled.input`
        height: 44px;
        padding: 0 14px;
        border-radius: 12px;
        border: ${border};
        background: hsl(0 0% 100% / 0.04);
        color: inherit;
        outline: none;

        &:focus-visible {
            box-shadow: ${ring};
        }

        &::placeholder {
            color: hsl(0 0% 100% / 0.45);
        }
    `,

    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 6px;
    `,

    Button: styled.a`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        padding: 0 14px;
        border-radius: 12px;
        border: ${border};
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
            box-shadow: ${ring};
            outline: none;
        }
    `,

    Small: styled.p`
        margin: 8px 0 0;
        font-size: 12px;
        color: ${textMuted};
    `,
};

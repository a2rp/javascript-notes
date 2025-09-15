import styled from "styled-components";

const border = "1px solid hsl(0 0% 100% / 0.12)";

export const Styled = {
    Page: styled.article`
        padding: 24px;
    `,
    H1: styled.h1`
        margin: 0 0 8px;
        font-size: clamp(20px, 3vw, 28px);
        line-height: 1.2;
    `,
    Lead: styled.p`
        margin: 0 0 16px;
        opacity: 0.9;
        max-width: 920px;
    `,
    Section: styled.section`
        border: ${border};
        border-radius: 14px;
        background: hsl(0 0% 100% / 0.03);
        padding: 14px 16px;
        margin: 18px 0;
    `,
    H3: styled.h3`
        margin: 0 0 8px;
        font-size: 16px;
    `,
    UL: styled.ul`
        margin: 0;
        padding-left: 20px;
        li {
            margin: 6px 0;
            max-width: 920px;
        }
    `,
    Code: styled.pre`
        margin: 0;
        padding: 12px 14px;
        border-radius: 10px;
        border: ${border};
        background: hsl(0 0% 100% / 0.04);
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
        line-height: 1.5;
        white-space: pre;
    `,
};

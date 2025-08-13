// src/Styled.js
import styled from "styled-components";

export const Styled = {
    Tagline: styled.p`
        max-width: 900px;
        margin: -15px auto 24px;
        color: #4a5568;
        text-align: center;
        line-height: 1.6;
    `,
    Divider: styled.hr`
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 20px 0 30px;
    `,
    Wrapper: styled.div`
        padding: 20px;
        max-width: 800px;
        margin: auto;
    `,
    Header: styled.h1`
        text-align: center;
        margin-bottom: 30px;
    `,
    Card: styled.div`
        border: 1px solid #ddd;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
    `,
    GoTopBtn: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        width: 44px;
        height: 44px;
        border: none;
        border-radius: 9999px;
        background: #007acc;
        color: #fff;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        z-index: 9999;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
        }
    `,
};

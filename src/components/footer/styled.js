import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px;
        color: #aaa;
        background: #010409;
        border-top: 1px solid #333;
        font-size: 12px;

        .brand { display: inline-flex; align-items: center; gap: 9px; color: #fff; font-weight: 700; }
        .brand img { width: 30px; height: 30px; object-fit: contain; }
        .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
        .links a { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #333; border-radius: 8px; color: #aaa; transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease; }
        .links a:hover, .links a:focus-visible { color: #fff; border-color: #888; box-shadow: 0 0 0 3px #ffffff14, 0 8px 22px #0008; text-shadow: 0 0 10px #ffffff66; }
        .copyright a { color: #ddd; font-weight: 700; }

        @media (width < 760px) { flex-direction: column; justify-content: center; }
    `,
};

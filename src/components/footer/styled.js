import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #010409;
    color: #aaa;
    margin-top: 50px;
    overflow: hidden;
    padding: 15px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
`;

const Text = styled.div`
    a {
        color: #aaa;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Styled = {
    Wrapper,
    Text,
};

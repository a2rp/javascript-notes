import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./Styled";

const NotFound = ({
    homePath = "/",
    indexPath = "/", // change to "/topics" or your notes index when ready
    enableSearch = true, // set false if you don't have a /search route yet
}) => {
    const [q, setQ] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const onSearch = (e) => {
        e.preventDefault();
        if (!q.trim()) return;
        // Adjust this route if your search page differs:
        navigate(`/search?q=${encodeURIComponent(q.trim())}`);
    };

    return (
        <Styled.Page>
            <Styled.Container>
                <Styled.Card role="region" aria-labelledby="nf-title">
                    <Styled.Code aria-hidden>404</Styled.Code>

                    <Styled.Title id="nf-title">Route not found</Styled.Title>
                    <Styled.Subtitle>
                        This URL doesn't match any current pages. It may be outdated, renamed, or in a private draft.
                    </Styled.Subtitle>

                    <Styled.PathHint>
                        <span>Requested:</span> <code>{location.pathname}</code>
                    </Styled.PathHint>

                    {enableSearch && (
                        <Styled.SearchForm onSubmit={onSearch} role="search" aria-label="Search notes">
                            <Styled.Input
                                type="search"
                                placeholder="Search notes, topics, or keywords…"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                aria-label="Search query"
                                autoComplete="off"
                            />
                            {/* <Styled.Button as="button" type="submit">Search</Styled.Button> */}
                            <Styled.Button as={NavLink} to={homePath}>Search</Styled.Button>
                        </Styled.SearchForm>
                    )}

                    <Styled.Actions>
                        <Styled.Button as={NavLink} to={homePath}>Go to Home</Styled.Button>
                        <Styled.Button as={NavLink} to={homePath}>Browse All Notes</Styled.Button>
                        <Styled.Button as="button" type="button" onClick={() => navigate(-1)}>
                            Go Back
                        </Styled.Button>
                    </Styled.Actions>

                    {/* <Styled.Small>
                        Tip: On static hosting (like GitHub Pages), paths are case-sensitive. If you just renamed a file, try opening Home first and navigate again.
                    </Styled.Small> */}
                </Styled.Card>
            </Styled.Container>
        </Styled.Page>
    );
};

export default NotFound;

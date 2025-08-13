import React, { useState, Suspense, lazy } from "react";
import { topicsList } from "../data/topicsList";
import { Styled } from "../Styled";
import GoToTop from "../components/GoToTop"; // if you added it earlier

export default function Home() {
    const [openTopics, setOpenTopics] = useState({});

    const toggleTopic = (topic) => {
        setOpenTopics((prev) => {
            const isOpen = !!prev[topic.id];
            if (isOpen) {
                const updated = { ...prev };
                delete updated[topic.id];
                return updated;
            }
            return { ...prev, [topic.id]: lazy(topic.component) };
        });
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>JavaScript Notes</Styled.Header>

            <Styled.Tagline>
                Topics from basics to advanced, explained clearly with runnable, in-browser examples
                (Monaco Editor).
            </Styled.Tagline>

            <Styled.Divider />

            {topicsList.map((t) => {
                const TopicComp = openTopics[t.id];
                return (
                    <Styled.Card key={t.id}>
                        <h1 onClick={() => toggleTopic(t)} style={{ cursor: "pointer" }}>
                            {t.title}
                        </h1>
                        <small>{t.category}</small>

                        {TopicComp && (
                            <Suspense fallback={<p>Loading...</p>}>
                                <TopicComp />
                            </Suspense>
                        )}
                    </Styled.Card>
                );
            })}

            <GoToTop />
        </Styled.Wrapper>
    );
}

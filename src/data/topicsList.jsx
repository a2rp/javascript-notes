// src/data/topicsList.js
export const topicsList = [
    {
        id: "jsIntro",
        title: "JavaScript Intro",
        category: "Basics",
        component: () => import("../topics/basics/jsIntro.jsx"),
    },
    {
        id: "variables",
        title: "Variables in JavaScript",
        category: "Basics",
        component: () => import("../topics/basics/variables.jsx"),
    },
    {
        id: "dataTypes",
        title: "JavaScript Data Types",
        category: "Basics",
        component: () => import("../topics/basics/dataTypes.jsx"),
    },
];

import React from "react";
import CodeEditor from "../../components/CodeEditor";

export default function Variables() {
    return (
        <div>
            <h2>JavaScript Variables</h2>
            <p>Variables are containers for storing data values.</p>
            <CodeEditor
                defaultCode={`let name = "Ashish";\nconst age = 25;\nconsole.log(name, age);`}
            />
        </div>
    );
}

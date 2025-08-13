// src/components/CodeEditor.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ defaultCode }) {
    const [code, setCode] = useState(defaultCode || "");
    const [output, setOutput] = useState("");

    const runCode = async () => {
        const logs = [];

        // capture helpers (no mirroring to dev console)
        const capture = (...args) =>
            logs.push(
                args
                    .map(a =>
                        typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)
                    )
                    .join(" ")
            );

        const origLog = console.log;
        const origWarn = console.warn;
        const origError = console.error;

        console.log = capture;
        console.warn = (...args) => capture("⚠️", ...args);
        console.error = (...args) => capture("❌", ...args);

        try {
            // safer than eval; runs in function scope
            const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;
            const fn = new AsyncFunction(`"use strict";\n${code}`);
            const result = await fn();

            setOutput(logs.length ? logs.join("\n") : String(result));
        } catch (err) {
            setOutput("Error: " + err.message);
        } finally {
            // always restore originals
            console.log = origLog;
            console.warn = origWarn;
            console.error = origError;
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: 8, marginBottom: 20 }}>
            <Editor
                height="220px"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={(v) => setCode(v ?? "")}
                options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false, automaticLayout: true }}
            />

            <button
                onClick={runCode}
                style={{ padding: "8px 12px", margin: "10px", cursor: "pointer", background: "#007acc", color: "#fff", border: "none", borderRadius: 4 }}
            >
                Run
            </button>

            {output && (
                <pre style={{ background: "#1e1e1e", color: output.startsWith("Error:") ? "red" : "#0f0", padding: 10, minHeight: 50, margin: 0 }}>
                    {output}
                </pre>
            )}
        </div>
    );
}

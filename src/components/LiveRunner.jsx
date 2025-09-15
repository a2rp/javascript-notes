import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const border = "1px solid hsl(0 0% 100% / 0.14)";
const ring = "0 0 0 3px hsl(200 80% 60% / 0.35)";

const Box = styled.section`
  border: ${border};
  border-radius: 14px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex; align-items: center; gap: 10px;
  padding: 10px; border-bottom: ${border};
  flex-wrap: wrap;
  > strong { font-size: 14px; opacity: 0.9; }
  label { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; opacity: 0.9; }
`;

const Btn = styled.button`
  height: 34px; padding: 0 12px; border-radius: 10px;
  border: ${border}; background: hsl(0 0% 100% / 0.04);
  color: inherit; cursor: pointer; user-select: none;
  transition: transform 120ms ease, background 120ms ease, box-shadow 120ms ease;
  &:hover { background: hsl(0 0% 100% / 0.07); transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: none; box-shadow: ${ring}; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: ${({ $h }) => $h || 360}px;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`;

const Pane = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 0;
  &:not(:last-child) { border-right: ${border}; }
  @media (max-width: 860px) {
    &:not(:last-child) { border-right: 0; border-bottom: ${border}; }
  }
`;

const PaneHead = styled.div`
  padding: 10px 12px; font-size: 12px; opacity: 0.8; border-bottom: ${border};
  display: flex; align-items: center; justify-content: space-between;
`;
const PaneBody = styled.div`
  min-height: 0; /* important: lets child fill */
  display: grid;
`;

const TA = styled.textarea`
  width: 100%; height: 100%; resize: none; padding: 12px 14px;
  border: 0; outline: none; background: transparent; color: inherit;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  line-height: 1.5; font-size: 13px;
`;

const Pre = styled.pre`
  margin: 0; padding: 12px 14px; overflow: auto; white-space: pre-wrap; word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 13px;
`;

function useDebounced(value, delay = 500) {
    const [v, setV] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => setV(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);
    return v;
}

/**
 * LiveRunner
 * - No external deps
 * - Captures console.log/warn/error
 * - Auto-run (debounced) + Run button + Reset + Copy
 */
export default function LiveRunner({
    title = "Example",
    initialCode = "console.log('Hello, JS!')",
    height = 360,
    autorunDefault = true,
}) {
    const [code, setCode] = useState(initialCode);
    const [autorun, setAutorun] = useState(autorunDefault);
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState("");
    const debouncedCode = useDebounced(code, 500);
    const lastRunRef = useRef(0);

    const run = useMemo(() => {
        return () => {
            lastRunRef.current++;
            const runId = lastRunRef.current;

            const nextLogs = [];
            const original = {
                log: console.log, warn: console.warn, error: console.error,
            };
            console.log = (...args) => { nextLogs.push({ t: "log", args }); original.log(...args); };
            console.warn = (...args) => { nextLogs.push({ t: "warn", args }); original.warn(...args); };
            console.error = (...args) => { nextLogs.push({ t: "error", args }); original.error(...args); };

            try {
                // Isolated eval (still same window, but captures console)
                const fn = new Function(`"use strict";\n${code}\n`);
                const ret = fn();
                if (ret !== undefined) nextLogs.push({ t: "ret", args: [ret] });
                if (runId === lastRunRef.current) {
                    setError("");
                    setLogs(nextLogs);
                }
            } catch (err) {
                if (runId === lastRunRef.current) {
                    setError(String(err && err.message ? err.message : err));
                    setLogs(nextLogs);
                }
            } finally {
                console.log = original.log;
                console.warn = original.warn;
                console.error = original.error;
            }
        };
    }, [code]);

    // Auto-run on change (debounced)
    useEffect(() => {
        if (!autorun) return;
        run();
    }, [debouncedCode, autorun, run]);

    const onCopy = async () => {
        try { await navigator.clipboard.writeText(code); } catch { }
    };

    return (
        <Box>
            <Toolbar>
                <strong>{title}</strong>
                <Btn type="button" onClick={run}>Run</Btn>
                <Btn type="button" onClick={() => setCode(initialCode)}>Reset</Btn>
                <Btn type="button" onClick={onCopy}>Copy</Btn>
                <label>
                    <input type="checkbox" checked={autorun} onChange={e => setAutorun(e.target.checked)} />
                    Auto-run
                </label>
                {error ? <span style={{ color: "salmon", fontSize: 12 }}>Error</span> : <span style={{ opacity: 0.6, fontSize: 12 }}>OK</span>}
            </Toolbar>

            <Grid $h={height}>
                <Pane>
                    <PaneHead>Editor</PaneHead>
                    <PaneBody><TA value={code} onChange={e => setCode(e.target.value)} spellCheck="false" /></PaneBody>
                </Pane>

                <Pane>
                    <PaneHead>Output</PaneHead>
                    <PaneBody>
                        <Pre>
                            {logs.length === 0 && !error ? "No output." : null}
                            {logs.map((l, i) => {
                                const tag = ({ log: "LOG", warn: "WARN", error: "ERR", ret: "RET" })[l.t] || "";
                                return <div key={i}><strong>{tag}:</strong> {l.args.map(String).join(" ")}</div>;
                            })}
                            {error ? <div><strong>ERR:</strong> {error}</div> : null}
                        </Pre>
                    </PaneBody>
                </Pane>
            </Grid>
        </Box>
    );
}

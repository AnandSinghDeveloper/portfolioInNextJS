"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className="relative w-full rounded-lg bg-slate-900 overflow-hidden">
      <div className="flex flex-col">
        {/* Header with filename and tabs */}
        <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/50 p-3">
          {tabsExist ? (
            <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-slate-700 text-white"
                      : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-slate-400">{filename}</div>
          )}
          
          <button
            onClick={copyToClipboard}
            className="ml-2 flex items-center gap-1 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-200"
            aria-label="Copy code"
          >
            {copied ? (
              <IconCheck size={16} className="text-green-400" />
            ) : (
              <IconCopy size={16} />
            )}
          </button>
        </div>

        {/* Code content */}
        <div className="overflow-auto max-h-[70vh]">
          <SyntaxHighlighter
            language={activeLanguage}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
            wrapLines={true}
            showLineNumbers={true}
            lineProps={(lineNumber) => ({
              style: {
                backgroundColor: activeHighlightLines.includes(lineNumber)
                  ? "rgba(59, 130, 246, 0.15)"
                  : "transparent",
                display: "block",
                width: "100%",
              },
            })}
            lineNumberStyle={{
              minWidth: "2.25em",
              color: "rgb(148, 163, 184)",
              paddingRight: "1em",
            }}
            PreTag="div"
          >
            {String(activeCode).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
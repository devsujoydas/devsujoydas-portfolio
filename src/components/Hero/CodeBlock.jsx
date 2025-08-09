import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

const codeString = `// Welcome to my Portfolio!
import { kausar } from 'codewithKausar43';
import { Skills } from '@expertise';

function createAmazingProjects() {
  const mySkills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Redux", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Figma"],
    passion: "Building user-friendly web applications"
  };

  return {
    message: "Let's collaborate and create something amazing!",
    contact: "Scroll down 👇 to connect →"
  };
}
`;

const CodeBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-indigo-900/30 max-w-xl w-full"
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-700/50 to-indigo-700/50 border-b border-purple-500/30">
        <span className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></span>
      </div>

      {/* Code block */}
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          background: "transparent",
          padding: "1.5rem",
          fontSize: "0.9rem",
          lineHeight: "1.6",
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </motion.div>
  );
};

export default CodeBlock;
    
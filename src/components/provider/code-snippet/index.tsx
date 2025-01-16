import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
export const CodeSnippet = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

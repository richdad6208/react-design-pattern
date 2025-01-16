import { CodeSnippet } from "@/components/provider/code-snippet";
import { layout } from "@/styles/layout";
import React, { ComponentType } from "react";

const sampleCode1 = `
function withStyles(Component: ComponentType<IComponent>) {
  return (props: object) => {
    const styleClass = "bg-gray-500 w-fit px-3 py-2 rounded-full ";

    return <Component className={styleClass} {...props} />;
  };
}

const Button = ({ className }: { className: string }) => (
  <button className={className}}>Click me!</button>
);

const Text = ({ className }: { className: string }) => (
  <p className={className}>Hell world!</p>
);

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);
`;

export default function Page() {
  return (
    <main className="space-y-4">
      <section>
        <CodeSnippet code={sampleCode1} />
      </section>
      <section className="space-y-4">
        <h3 className="text-2xl">Result</h3>
        <div className={`${layout.article} space-y-3`}>
          <StyledButton />
          <StyledText />
        </div>
      </section>
    </main>
  );
}

interface IComponent {
  className: string;
}

function withStyles(Component: ComponentType<IComponent>) {
  return (props: object) => {
    const styleClass = "bg-gray-500 w-fit px-3 py-2 rounded-full ";

    return <Component className={styleClass} {...props} />;
  };
}

const Button = ({ className }: { className: string }) => (
  <button className={`${className}`}>Click me!</button>
);
const Text = ({ className }: { className: string }) => (
  <p className={className}>Hell world!</p>
);

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

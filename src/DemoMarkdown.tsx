import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `# Hello Markdown!\nJust a link: www.example.com.`;

const DemoMarkdown = () => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <a href={href} className="text-blue-200 underline">
            {children}
          </a>
        ),
      }}
      className="bg-blue-500 text-white"
    >
      {markdown}
    </Markdown>
  );
};

export default DemoMarkdown;

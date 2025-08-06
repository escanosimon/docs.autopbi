import React from 'react'
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import Base from '@/components/base';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

const Scan = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const markdownPath = path.join(__dirname, 'content.md');
  const markdownContent = await fs.readFile(markdownPath, 'utf8');

  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Scan"}
      ]
    }>
      <div className="prose prose-sm prose-pre:text-lg prose-neutral prose-headings:font-medium prose-headings:text-primary !max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {markdownContent}
        </ReactMarkdown>
      </div>
    </Base>
  )
}

export default Scan
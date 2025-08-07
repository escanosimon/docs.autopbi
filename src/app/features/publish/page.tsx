import React from 'react'
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import Base from '@/components/base';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import type { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Bulk Publish | AutoPBI Documentation",
  description: "Learn how to publish Power BI reports in bulk using AutoPBI.",
};

const Publish = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const images = Array.from({ length: 7 }, (_, i) => `/features/publish/${i + 1}.png`);

  const markdownPath = path.join(__dirname, 'content.md');
  const markdownContent = await fs.readFile(markdownPath, 'utf8');

  return (
    <Base crumbs={
      [
        {name: "Features", url: "/features"},
        {name: "Bulk Publish"}
      ]
    }>
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-md"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="prose dark:prose-invert prose-strong:text-secondary prose-sm prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:text-lg prose-neutral prose-headings:font-medium prose-headings:text-primary !max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {markdownContent}
        </ReactMarkdown>
      </div>
    </Base>
  )
}

export default Publish
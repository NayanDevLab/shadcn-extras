'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import CodePreview from './code-preview';

type CodeBlockClientProps = {
  code: string;
  html: string;
  className?: string;
};

export default function CodeBlockClient({
  code,
  html,
  className,
}: CodeBlockClientProps) {
  return (
    <div
      className={cn(
        'not-prose max-h-[650px] overflow-auto overflow-x-auto overflow-y-hidden rounded-md text-sm dark:border dark:border-zinc-800',
        className
      )}
    >
      <CodePreview code={code}>
        <div className='font-mono' dangerouslySetInnerHTML={{ __html: html }} />
      </CodePreview>
    </div>
  );
}

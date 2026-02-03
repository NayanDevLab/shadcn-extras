'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import ComponentPreview from './component-preview';
import CodeBlockClient from './code-block-client';

type ComponentCodePreviewClientProps = {
  component: React.ReactElement;
  code: string;
  html: string;
  classNameComponentContainer?: string;
  hasReTrigger?: boolean;
};

export default function ComponentCodePreviewClient({
  component,
  code,
  html,
  classNameComponentContainer,
  hasReTrigger,
}: ComponentCodePreviewClientProps) {
  return (
    <div className='not-prose relative z-0 flex items-center justify-between pb-4'>
      <Tabs defaultValue='preview' className='relative mr-auto w-full'>
        <TabsList className=''>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='code'>Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value='preview'
          className='border border-zinc-200 dark:border-zinc-800'
        >
          <ComponentPreview
            component={component}
            hasReTrigger={hasReTrigger}
            className={classNameComponentContainer}
          />
        </TabsContent>
        <TabsContent
          value='code'
          className='border border-zinc-200 dark:border-zinc-800'
        >
          <CodeBlockClient code={code} html={html} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

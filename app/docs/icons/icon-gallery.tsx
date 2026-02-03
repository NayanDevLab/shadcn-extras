'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ComponentCodePreviewClient from '@/components/website/component-code-preview-client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/tabs';
import { InstallationCli } from '@/components/website/installation-cli';
import CodeBlockClient from '@/components/website/code-block-client';

type IconData = {
  name: string;
  installName: string;
  component: React.ReactNode;
  example: React.ReactNode;
  filePath: string;
  code: string;
  html: string;
  componentCode: string;
  componentHtml: string;
};

type IconGalleryProps = {
  icons: IconData[];
};

export function IconGallery({ icons }: IconGalleryProps) {
  const [selectedIcon, setSelectedIcon] = React.useState<IconData | null>(null);

  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {icons.map((icon) => (
        <Dialog
          key={icon.installName}
          onOpenChange={(open) => {
            if (open) setSelectedIcon(icon);
          }}
        >
          <DialogTrigger asChild>
            <div className='bg-card text-card-foreground hover:bg-accent/50 group relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'>
              <div className='flex flex-1 items-center justify-center'>
                <div className='transition-transform duration-300 group-hover:scale-110'>
                  {icon.component}
                </div>
              </div>
              <span className='text-muted-foreground group-hover:text-foreground mt-2 text-xs font-medium'>
                {icon.name}
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className='max-h-[90vh] max-w-4xl overflow-y-auto'>
            {selectedIcon && (
              <div className='flex flex-col space-y-6'>
                <div>
                  <h2 className='text-2xl font-bold tracking-tight'>
                    {selectedIcon.name}
                  </h2>
                  <p className='text-muted-foreground'>
                    Click tabs below to see code or installation.
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold'>Preview</h3>
                  <ComponentCodePreviewClient
                    component={selectedIcon.example as React.ReactElement}
                    code={selectedIcon.code}
                    html={selectedIcon.html}
                    classNameComponentContainer='min-h-[250px] flex items-center justify-center py-10'
                  />
                </div>

                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold'>Installation</h3>
                  <Tabs defaultValue='cli'>
                    <TabsList>
                      <TabsTrigger value='cli'>CLI</TabsTrigger>
                      <TabsTrigger value='manual'>Manual</TabsTrigger>
                    </TabsList>
                    <TabsContent value='cli'>
                      <InstallationCli value={selectedIcon.installName} />
                    </TabsContent>
                    <TabsContent value='manual'>
                      <div className='prose dark:prose-invert'>
                        <p>
                          Copy the component to{' '}
                          <code>
                            components/core/{selectedIcon.installName}.tsx
                          </code>
                        </p>
                      </div>
                      <CodeBlockClient
                        html={selectedIcon.componentHtml}
                        code={selectedIcon.componentCode}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

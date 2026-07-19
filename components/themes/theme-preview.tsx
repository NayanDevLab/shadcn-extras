'use client';

import React from 'react';
import {
  ArrowUpRight,
  Bell,
  Moon,
  Sun,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { PreviewMode } from '@/lib/themes/build-css';
import type { ThemePreset } from '@/lib/themes/types';
import { cn } from '@/lib/utils';

interface ThemePreviewProps {
  preset: ThemePreset;
  mode: PreviewMode;
  onModeChange: (mode: PreviewMode) => void;
  /** Font-variable classes so portaled content can resolve theme fonts */
  fontClass: string;
}

const TEAM = [
  { name: 'Aria Patel', email: 'aria@studio.dev', status: 'Active', amount: '$1,240' },
  { name: 'Kai Tanaka', email: 'kai@studio.dev', status: 'Pending', amount: '$860' },
  { name: 'Maya Rossi', email: 'maya@studio.dev', status: 'Active', amount: '$2,310' },
  { name: 'Leo Novak', email: 'leo@studio.dev', status: 'Inactive', amount: '$420' },
];

export function ThemePreview({
  preset,
  mode,
  onModeChange,
  fontClass,
}: ThemePreviewProps) {
  const portalProps = {
    'data-theme-preview': '',
    className: fontClass,
  };

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
          Preview — {preset.name}
        </h2>
        <div className='flex items-center gap-1 rounded-full border border-zinc-200 p-1 dark:border-zinc-800'>
          <button
            type='button'
            onClick={() => onModeChange('light')}
            aria-label='Preview light mode'
            className={cn(
              'rounded-full p-1.5 transition-colors',
              mode === 'light'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            )}
          >
            <Sun className='size-4' />
          </button>
          <button
            type='button'
            onClick={() => onModeChange('dark')}
            aria-label='Preview dark mode'
            className={cn(
              'rounded-full p-1.5 transition-colors',
              mode === 'dark'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            )}
          >
            <Moon className='size-4' />
          </button>
        </div>
      </div>

      <div className={mode === 'dark' ? 'dark' : undefined}>
        <div
          id='themes-preview'
          className='bg-background text-foreground border-border overflow-hidden rounded-2xl border p-6 shadow-sm md:p-8'
        >
          <div className='space-y-6'>
            {/* Heading + badges */}
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div>
                <h1 className='text-2xl font-bold'>Team Dashboard</h1>
                <p className='text-muted-foreground text-sm'>
                  Everything your workspace shipped this week.
                </p>
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <Badge>New</Badge>
                <Badge variant='secondary'>Beta</Badge>
                <Badge variant='outline'>v2.4</Badge>
                <Badge variant='destructive'>3 issues</Badge>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant='outline' size='icon'>
                      <Bell />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent {...portalProps}>
                    You have 3 unread notifications
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Buttons + dialog */}
            <div className='flex flex-wrap items-center gap-2'>
              <Button>Publish</Button>
              <Button variant='secondary'>Save draft</Button>
              <Button variant='outline'>Preview</Button>
              <Button variant='ghost'>Discard</Button>
              <Button variant='destructive'>Delete</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='outline'>
                    Invite member <ArrowUpRight />
                  </Button>
                </DialogTrigger>
                <DialogContent
                  data-slot='dialog-content'
                  {...portalProps}
                  className={cn(
                    fontClass,
                    'bg-background text-foreground border-border'
                  )}
                >
                  <DialogHeader>
                    <DialogTitle>Invite a team member</DialogTitle>
                    <DialogDescription>
                      They will receive an email with a link to join your
                      workspace.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='space-y-2'>
                    <Label htmlFor='invite-email'>Email address</Label>
                    <Input id='invite-email' placeholder='name@company.com' />
                  </div>
                  <DialogFooter>
                    <Button>Send invite</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stat cards */}
            <div className='grid gap-4 sm:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardDescription>Monthly revenue</CardDescription>
                  <CardTitle className='text-3xl'>$24,830</CardTitle>
                </CardHeader>
                <CardFooter className='text-sm'>
                  <span className='text-muted-foreground flex items-center gap-1'>
                    <TrendingUp className='size-4' /> +12.4% from last month
                  </span>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Active users</CardDescription>
                  <CardTitle className='text-3xl'>1,982</CardTitle>
                </CardHeader>
                <CardFooter className='text-sm'>
                  <span className='text-muted-foreground flex items-center gap-1'>
                    <TrendingDown className='size-4' /> -2.1% from last month
                  </span>
                </CardFooter>
              </Card>
            </div>

            <Separator />

            {/* Tabs: form + table */}
            <Tabs defaultValue='members'>
              <TabsList>
                <TabsTrigger value='members'>Members</TabsTrigger>
                <TabsTrigger value='settings'>Settings</TabsTrigger>
              </TabsList>

              <TabsContent value='members'>
                <Card>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Member</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className='text-right'>Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {TEAM.map((member) => (
                          <TableRow key={member.name}>
                            <TableCell>
                              <div className='flex items-center gap-3'>
                                <Avatar>
                                  <AvatarFallback>
                                    {member.name
                                      .split(' ')
                                      .map((part) => part[0])
                                      .join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className='font-medium'>
                                    {member.name}
                                  </div>
                                  <div className='text-muted-foreground text-xs'>
                                    {member.email}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  member.status === 'Active'
                                    ? 'default'
                                    : member.status === 'Pending'
                                      ? 'secondary'
                                      : 'outline'
                                }
                              >
                                {member.status}
                              </Badge>
                            </TableCell>
                            <TableCell className='text-right'>
                              {member.amount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='settings'>
                <Card>
                  <CardHeader>
                    <CardTitle>Workspace settings</CardTitle>
                    <CardDescription>
                      Configure how your workspace behaves.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-5'>
                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div className='space-y-2'>
                        <Label htmlFor='workspace-name'>Workspace name</Label>
                        <Input id='workspace-name' placeholder='Acme Inc.' />
                      </div>
                      <div className='space-y-2'>
                        <Label>Default role</Label>
                        <Select defaultValue='editor'>
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select a role' />
                          </SelectTrigger>
                          <SelectContent {...portalProps}>
                            <SelectItem value='viewer'>Viewer</SelectItem>
                            <SelectItem value='editor'>Editor</SelectItem>
                            <SelectItem value='admin'>Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Checkbox id='weekly-digest' defaultChecked />
                      <Label htmlFor='weekly-digest'>
                        Send me a weekly digest
                      </Label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Switch id='public-profile' defaultChecked />
                      <Label htmlFor='public-profile'>Public profile</Label>
                    </div>
                    <div className='space-y-2'>
                      <Label>Notification volume</Label>
                      <Slider defaultValue={[65]} max={100} step={1} />
                    </div>
                  </CardContent>
                  <CardFooter className='gap-2'>
                    <Button>Save changes</Button>
                    <Button variant='ghost'>Cancel</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

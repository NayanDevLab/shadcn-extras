'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  SwitchRow,
  ToolLayout,
  hexToRgba,
} from './shared';

const ROWS = [
  ['Aria Patel', 'Design', 'Active'],
  ['Kai Tanaka', 'Engineering', 'Pending'],
  ['Maya Rossi', 'Marketing', 'Active'],
  ['Leo Novak', 'Support', 'Inactive'],
];

export function TableGenerator() {
  const [striped, setStriped] = useState(true);
  const [hoverable, setHoverable] = useState(true);
  const [bordered, setBordered] = useState(false);
  const [compact, setCompact] = useState(false);
  const [headerBg, setHeaderBg] = useState('#18181b');
  const [headerText, setHeaderText] = useState('#ffffff');

  const cellPadding = compact ? 'px-3 py-1.5' : 'px-4 py-3';

  const rowClasses = (index: number) =>
    [
      striped && index % 2 === 1 ? 'bg-zinc-50 dark:bg-zinc-900/50' : '',
      hoverable ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800/60' : '',
      'border-b border-zinc-200 dark:border-zinc-800 transition-colors',
    ]
      .filter(Boolean)
      .join(' ');

  const jsx = `<table className='w-full text-sm ${bordered ? 'border border-zinc-200' : ''}'>
  <thead>
    <tr style={{ background: '${headerBg}', color: '${headerText}' }}>
      <th className='${cellPadding} text-left font-medium'>Name</th>
      <th className='${cellPadding} text-left font-medium'>Team</th>
      <th className='${cellPadding} text-left font-medium'>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className='${[
      'border-b border-zinc-200',
      striped ? 'odd:bg-white even:bg-zinc-50' : '',
      hoverable ? 'hover:bg-zinc-100' : '',
      'transition-colors',
    ]
      .filter(Boolean)
      .join(' ')}'>
      <td className='${cellPadding}'>Aria Patel</td>
      <td className='${cellPadding}'>Design</td>
      <td className='${cellPadding}'>Active</td>
    </tr>
    {/* ...more rows */}
  </tbody>
</table>`;

  return (
    <ToolLayout
      controls={
        <>
          <SwitchRow label='Striped rows' checked={striped} onChange={setStriped} />
          <SwitchRow label='Hover highlight' checked={hoverable} onChange={setHoverable} />
          <SwitchRow label='Outer border' checked={bordered} onChange={setBordered} />
          <SwitchRow label='Compact' checked={compact} onChange={setCompact} />
          <ColorField label='Header background' value={headerBg} onChange={setHeaderBg} />
          <ColorField label='Header text' value={headerText} onChange={setHeaderText} />
        </>
      }
    >
      <div className='w-full overflow-x-auto rounded-3xl border p-6 shadow-sm'>
        <table
          className='w-full text-sm'
          style={
            bordered ? { border: `1px solid ${hexToRgba('#a1a1aa', 0.4)}` } : undefined
          }
        >
          <thead>
            <tr style={{ background: headerBg, color: headerText }}>
              {['Name', 'Team', 'Status'].map((head) => (
                <th
                  key={head}
                  className={`${cellPadding} text-left font-medium`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, index) => (
              <tr key={row[0]} className={rowClasses(index)}>
                {row.map((cell) => (
                  <td key={cell} className={cellPadding}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CopyBlock label='JSX + Tailwind' code={jsx} />
    </ToolLayout>
  );
}

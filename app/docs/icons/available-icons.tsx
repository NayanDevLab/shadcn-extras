import React from 'react';
import { PhoneIcon } from '@/components/core/phone-icon';
import { RocketIcon } from '@/components/core/rocket-icon';
import { BulbIcon } from '@/components/core/bulb-icon';
import { MoneyIcon } from '@/components/core/money-icon';
import { RefreshIcon } from '@/components/core/refresh-icon';
import { ClockIcon } from '@/components/core/clock-icon';
import { TruckIcon } from '@/components/core/truck-icon';

import PhoneIconBasic from './phone-icon-basic';
import RocketIconBasic from './rocket-icon-basic';
import BulbIconBasic from './bulb-icon-basic';
import MoneyIconBasic from './money-icon-basic';
import RefreshIconBasic from './refresh-icon-basic';
import ClockIconBasic from './clock-icon-basic';
import TruckIconBasic from './truck-icon-basic';

export type IconDefinition = {
  name: string;
  installName: string;
  component: React.ReactNode; // Preview in grid
  example: React.ReactNode; // Full example in modal
  filePath: string;
};

export const AVAILABLE_ICONS: IconDefinition[] = [
  {
    name: 'Phone Icon',
    installName: 'phone-icon',
    component: <PhoneIcon size={48} startOnHover={true} />,
    example: <PhoneIconBasic />,
    filePath: 'app/docs/icons/phone-icon-basic.tsx',
  },
  {
    name: 'Rocket Icon',
    installName: 'rocket-icon',
    component: <RocketIcon size={48} startOnHover={true} />,
    example: <RocketIconBasic />,
    filePath: 'app/docs/icons/rocket-icon-basic.tsx',
  },
  {
    name: 'Bulb Icon',
    installName: 'bulb-icon',
    component: <BulbIcon size={48} startOnHover={true} />,
    example: <BulbIconBasic />,
    filePath: 'app/docs/icons/bulb-icon-basic.tsx',
  },
  {
    name: 'Money Icon',
    installName: 'money-icon',
    component: <MoneyIcon size={48} startOnHover={true} />,
    example: <MoneyIconBasic />,
    filePath: 'app/docs/icons/money-icon-basic.tsx',
  },
  {
    name: 'Refresh Icon',
    installName: 'refresh-icon',
    component: <RefreshIcon size={48} startOnHover={true} />,
    example: <RefreshIconBasic />,
    filePath: 'app/docs/icons/refresh-icon-basic.tsx',
  },
  {
    name: 'Clock Icon',
    installName: 'clock-icon',
    component: <ClockIcon size={48} startOnHover={true} />,
    example: <ClockIconBasic />,
    filePath: 'app/docs/icons/clock-icon-basic.tsx',
  },
  {
    name: 'Truck Icon',
    installName: 'truck-icon',
    component: <TruckIcon size={48} startOnHover={true} />,
    example: <TruckIconBasic />,
    filePath: 'app/docs/icons/truck-icon-basic.tsx',
  },
];

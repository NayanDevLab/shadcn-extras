import React from 'react';
import { PhoneIcon } from '@/components/core/phone-icon';
import { RocketIcon } from '@/components/core/rocket-icon';
import { BulbIcon } from '@/components/core/bulb-icon';
import { MoneyIcon } from '@/components/core/money-icon';
import { RefreshIcon } from '@/components/core/refresh-icon';
import { ClockIcon } from '@/components/core/clock-icon';
import { TruckIcon } from '@/components/core/truck-icon';
import { NetworkIcon } from '@/components/core/network-icon';
import { HomeIcon } from '@/components/core/home-icon';
import { CartIcon } from '@/components/core/cart-icon';
import { ShieldCheckIcon } from '@/components/core/shield-check-icon';
import { CalendarIcon } from '@/components/core/calendar-icon';
import { MobileStoreIcon } from '@/components/core/mobile-store-icon';
import { BalanceIcon } from '@/components/core/balance-icon';
import { BuildingIcon } from '@/components/core/building-icon';

import PhoneIconBasic from './phone-icon-basic';
import RocketIconBasic from './rocket-icon-basic';
import BulbIconBasic from './bulb-icon-basic';
import MoneyIconBasic from './money-icon-basic';
import RefreshIconBasic from './refresh-icon-basic';
import ClockIconBasic from './clock-icon-basic';
import TruckIconBasic from './truck-icon-basic';
import NetworkIconBasic from './network-icon-basic';
import HomeIconBasic from './home-icon-basic';
import CartIconBasic from './cart-icon-basic';
import ShieldCheckIconBasic from './shield-check-icon-basic';
import CalendarIconBasic from './calendar-icon-basic';
import MobileStoreIconBasic from './mobile-store-icon-basic';
import BalanceIconBasic from './balance-icon-basic';
import BuildingIconBasic from './building-icon-basic';

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
  {
    name: 'Network Icon',
    installName: 'network-icon',
    component: <NetworkIcon size={48} startOnHover={true} />,
    example: <NetworkIconBasic />,
    filePath: 'app/docs/icons/network-icon-basic.tsx',
  },
  {
    name: 'Home Icon',
    installName: 'home-icon',
    component: <HomeIcon size={48} startOnHover={true} doorColor='#06b6d4' />,
    example: <HomeIconBasic />,
    filePath: 'app/docs/icons/home-icon-basic.tsx',
  },
  {
    name: 'Cart Icon',
    installName: 'cart-icon',
    component: <CartIcon size={48} startOnHover={true} wheelColor='#06b6d4' />,
    example: <CartIconBasic />,
    filePath: 'app/docs/icons/cart-icon-basic.tsx',
  },
  {
    name: 'Shield Check Icon',
    installName: 'shield-check-icon',
    component: (
      <ShieldCheckIcon size={48} startOnHover={true} checkColor='#22c55e' />
    ),
    example: <ShieldCheckIconBasic />,
    filePath: 'app/docs/icons/shield-check-icon-basic.tsx',
  },
  {
    name: 'Calendar Icon',
    installName: 'calendar-icon',
    component: (
      <CalendarIcon size={48} startOnHover={true} ringColor='#06b6d4' />
    ),
    example: <CalendarIconBasic />,
    filePath: 'app/docs/icons/calendar-icon-basic.tsx',
  },
  {
    name: 'Mobile Store Icon',
    installName: 'mobile-store-icon',
    component: (
      <MobileStoreIcon size={48} startOnHover={true} cartColor='#06b6d4' />
    ),
    example: <MobileStoreIconBasic />,
    filePath: 'app/docs/icons/mobile-store-icon-basic.tsx',
  },
  {
    name: 'Balance Icon',
    installName: 'balance-icon',
    component: <BalanceIcon size={48} startOnHover={true} panColor='#06b6d4' />,
    example: <BalanceIconBasic />,
    filePath: 'app/docs/icons/balance-icon-basic.tsx',
  },
  {
    name: 'Building Icon',
    installName: 'building-icon',
    component: (
      <BuildingIcon size={48} startOnHover={true} lightColor='#06b6d4' />
    ),
    example: <BuildingIconBasic />,
    filePath: 'app/docs/icons/building-icon-basic.tsx',
  },
];

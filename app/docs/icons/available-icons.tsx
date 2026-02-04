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
import { GlobalIcon } from '@/components/core/global-icon';
import { UserIcon } from '@/components/core/user-icon';
import { GlobalSearchIcon } from '@/components/core/global-search-icon';
import { ToolsIcon } from '@/components/core/tools-icon';
import { TrophyIcon } from '@/components/core/trophy-icon';
import { MicrophoneIcon } from '@/components/core/microphone-icon';
import { LikeIcon } from '@/components/core/like-icon';
import { BellIcon } from '@/components/core/bell-icon';
import { HeartIcon } from '@/components/core/heart-icon';
import { TrashIcon } from '@/components/core/trash-icon';
import { ShareIcon } from '@/components/core/share-icon';
import { PaperPlaneIcon } from '@/components/core/paper-plane-icon';
import { MailStackIcon } from '@/components/core/mail-stack-icon';

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
import GlobalIconBasic from './global-icon-basic';
import UserIconBasic from './user-icon-basic';
import GlobalSearchIconBasic from './global-search-icon-basic';
import ToolsIconBasic from './tools-icon-basic';
import TrophyIconBasic from './trophy-icon-basic';
import MicrophoneIconBasic from './microphone-icon-basic';
import LikeIconBasic from './like-icon-basic';
import BellIconBasic from './bell-icon-basic';
import HeartIconBasic from './heart-icon-basic';
import TrashIconBasic from './trash-icon-basic';
import ShareIconBasic from './share-icon-basic';
import PaperPlaneIconBasic from './paper-plane-icon-basic';
import MailStackIconBasic from './mail-stack-icon-basic';

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
  {
    name: 'Global Icon',
    installName: 'global-icon',
    component: <GlobalIcon size={48} startOnHover={true} pinColor='#06b6d4' />,
    example: <GlobalIconBasic />,
    filePath: 'app/docs/icons/global-icon-basic.tsx',
  },
  {
    name: 'User Icon',
    installName: 'user-icon',
    component: <UserIcon size={48} startOnHover={true} userColor='#06b6d4' />,
    example: <UserIconBasic />,
    filePath: 'app/docs/icons/user-icon-basic.tsx',
  },
  {
    name: 'Global Search Icon',
    installName: 'global-search-icon',
    component: (
      <GlobalSearchIcon size={48} startOnHover={true} globeColor='#06b6d4' />
    ),
    example: <GlobalSearchIconBasic />,
    filePath: 'app/docs/icons/global-search-icon-basic.tsx',
  },
  {
    name: 'Tools Icon',
    installName: 'tools-icon',
    component: (
      <ToolsIcon size={48} startOnHover={true} screwdriverColor='#06b6d4' />
    ),
    example: <ToolsIconBasic />,
    filePath: 'app/docs/icons/tools-icon-basic.tsx',
  },
  {
    name: 'Trophy Icon',
    installName: 'trophy-icon',
    component: <TrophyIcon size={48} startOnHover={true} starColor='#fbbf24' />,
    example: <TrophyIconBasic />,
    filePath: 'app/docs/icons/trophy-icon-basic.tsx',
  },
  {
    name: 'Microphone Icon',
    installName: 'microphone-icon',
    component: (
      <MicrophoneIcon size={48} startOnHover={true} standColor='#06b6d4' />
    ),
    example: <MicrophoneIconBasic />,
    filePath: 'app/docs/icons/microphone-icon-basic.tsx',
  },
  {
    name: 'Like Icon',
    installName: 'like-icon',
    component: <LikeIcon size={48} startOnHover={true} cuffColor='#06b6d4' />,
    example: <LikeIconBasic />,
    filePath: 'app/docs/icons/like-icon-basic.tsx',
  },
  {
    name: 'Bell Icon',
    installName: 'bell-icon',
    component: (
      <BellIcon size={48} startOnHover={true} clapperColor='#06b6d4' />
    ),
    example: <BellIconBasic />,
    filePath: 'app/docs/icons/bell-icon-basic.tsx',
  },
  {
    name: 'Heart Icon',
    installName: 'heart-icon',
    component: <HeartIcon size={48} startOnHover={true} shineColor='#06b6d4' />,
    example: <HeartIconBasic />,
    filePath: 'app/docs/icons/heart-icon-basic.tsx',
  },
  {
    name: 'Trash Icon',
    installName: 'trash-icon',
    component: <TrashIcon size={48} startOnHover={true} lidColor='#06b6d4' />,
    example: <TrashIconBasic />,
    filePath: 'app/docs/icons/trash-icon-basic.tsx',
  },
  {
    name: 'Share Icon',
    installName: 'share-icon',
    component: <ShareIcon size={48} startOnHover={true} dotColor='#06b6d4' />,
    example: <ShareIconBasic />,
    filePath: 'app/docs/icons/share-icon-basic.tsx',
  },
  {
    name: 'Paper Plane Icon',
    installName: 'paper-plane-icon',
    component: (
      <PaperPlaneIcon size={48} startOnHover={true} trailColor='#06b6d4' />
    ),
    example: <PaperPlaneIconBasic />,
    filePath: 'app/docs/icons/paper-plane-icon-basic.tsx',
  },
  {
    name: 'Mail Stack Icon',
    installName: 'mail-stack-icon',
    component: (
      <MailStackIcon size={48} startOnHover={true} stackColor='#06b6d4' />
    ),
    example: <MailStackIconBasic />,
    filePath: 'app/docs/icons/mail-stack-icon-basic.tsx',
  },
];

import type { Locale } from '../types';
import { enCommon } from './en/common';
import { zhCommon } from './zh/common';

export const dictionaries = {
    en: enCommon,
    zh: zhCommon,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
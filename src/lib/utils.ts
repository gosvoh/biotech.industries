import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type PickRequairedPartial<T, R extends keyof T, O extends keyof T = never> = Prettify<Pick<T, R> & Partial<Pick<T, O>>>;
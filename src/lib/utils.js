import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const VITE_DEV_SERVER_URL = 'http://localhost:5173';

export function asset(path) {
  if (import.meta.env.DEV) {
    return `${VITE_DEV_SERVER_URL}${path}`;
  }
  return path;
}
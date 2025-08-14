import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const PLUGIN_NAME = 'rafiweb-plugin';
const VITE_DEV_SERVER_URL = 'http://localhost:5173';

export function asset(path) {
  if (import.meta.env.DEV) {
    return `${VITE_DEV_SERVER_URL}${path}`;
  }

  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `/wp-content/plugins/${PLUGIN_NAME}/dist/${cleanPath}`;
}
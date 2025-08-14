import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomNumber(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

export function getEng(pathName: string) {
  if (pathName.includes("vi")) {
    return "vi";
  }
  return "en";
}

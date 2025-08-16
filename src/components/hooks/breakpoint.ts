'use client';
import { Breakpoint, Orientation } from "../interface/types";
import { useState, useEffect } from 'react';

export const  getTailwindBreakpoint = () : {breakpoint: Breakpoint, orientation: Orientation} => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let orientation: Orientation = 'landscape';
  if (height > width) orientation = 'portrait';
  if (width < 640) return {breakpoint: 'xs', orientation};
  if (width < 768) return {breakpoint: 'sm', orientation};
  if (width < 1024) return {breakpoint: 'md', orientation};
  if (width < 1280) return {breakpoint: 'lg', orientation};
  return {breakpoint: 'xl', orientation};
}


export function useTailwindBreakpoint(): {breakpoint: Breakpoint, orientation: Orientation} {
  const [breakpoint, setBreakpoint] = useState<{breakpoint: Breakpoint, orientation: Orientation}>({breakpoint: 'xs', orientation: 'landscape'});

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(getTailwindBreakpoint());
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}
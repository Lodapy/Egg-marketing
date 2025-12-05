import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface DocumentSection {
  title: string;
  content: string;
}
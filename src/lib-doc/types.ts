import type { ComponentType } from 'svelte';

export interface DocProps {
    name: string;
    type: string;
    values?: readonly any[];
    default?: any;
}
export interface DocSlots {
    name?: string;
    description?: string;
    props?: DocProps[];
}
export interface DocEvents {
    name: string;
    type: string;
}
export interface DocActions {
    name: string;
}

// Section

export enum DocBlocType {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    p = 'p',
    hr = 'hr',
    api = 'api',
    demo = 'demo'
}

export interface DocBlocH1 {
    type: DocBlocType.h1;
    text: string;
    isLink?: boolean;
}
export interface DocBlocH2 {
    type: DocBlocType.h2;
    text: string;
    isLink?: boolean;
}
export interface DocBlocH3 {
    type: DocBlocType.h3;
    text: string;
    isLink?: boolean;
}
export interface DocBlocH4 {
    type: DocBlocType.h4;
    text: string;
    isLink?: boolean;
}
export interface DocBlocP {
    type: DocBlocType.p;
    text: string;
}
export interface DocBlocHr {
    type: DocBlocType.hr;
}
export interface DocBlocApi {
    type: DocBlocType.api;
    title?: string;
    props: DocProps[];
    events: DocEvents[];
    slots: DocSlots[];
    actions?: DocActions[];
}
export interface DocBlocDemo {
    type: DocBlocType.demo;
    component?: ComponentType;
}

export type DocBloc =
    | DocBlocH1 //
    | DocBlocH2
    | DocBlocH3
    | DocBlocH4
    | DocBlocP
    | DocBlocHr
    | DocBlocApi
    | DocBlocDemo;

// Page

export interface DocPage {
    id: string;
    title: string;
    description?: string;
    sections: DocBloc[][];
    // TODO delete
    demoTitle?: string;
    demoComponent?: ComponentType;
}

// Sidebar

export interface DocNavSection {
    id: string;
    title: string;
    pages: DocPage[];
}

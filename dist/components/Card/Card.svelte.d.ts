import { SvelteComponent } from "svelte";
import { type PropsCard } from './Card.props';
declare const __propDef: {
    props: PropsCard;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
        footer: {};
    };
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponent<CardProps, CardEvents, CardSlots> {
}
export {};

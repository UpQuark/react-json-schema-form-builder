import { ReactElement } from 'react';
import type { Mods } from './types';
interface CardGalleryProps {
    definitionSchema: {
        [key: string]: any;
    };
    definitionUiSchema: {
        [key: string]: any;
    };
    onChange: (schema: {
        [key: string]: any;
    }, uischema: {
        [key: string]: any;
    }) => void;
    mods?: Mods;
    categoryHash: {
        [key: string]: string;
    };
}
export default function CardGallery({ definitionSchema, definitionUiSchema, onChange, mods, categoryHash, }: CardGalleryProps): ReactElement;
export {};

import { ReactElement } from 'react';
import type { Mods } from './types';
export default function PredefinedGallery({ schema, uischema, onChange, mods, }: {
    schema: string;
    uischema: string;
    onChange: (schema: string, uischema: string) => any;
    mods?: Mods;
}): ReactElement;

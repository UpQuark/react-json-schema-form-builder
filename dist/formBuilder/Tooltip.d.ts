import { ReactElement } from 'react';
export default function Example({ text, type, id, }: {
    text: string;
    type: 'alert' | 'help';
    id: string;
}): ReactElement;

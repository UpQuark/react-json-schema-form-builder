import React from 'react';
import type { ModLabels } from './types';
export default function Add({ addElem, hidden, tooltipDescription, labels, }: {
    addElem: (choice: string) => void;
    hidden?: boolean;
    tooltipDescription?: string;
    labels?: ModLabels;
}): React.JSX.Element;

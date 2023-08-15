import { ReactElement } from 'react';
export default function CardSelector({ possibleChoices, chosenChoices, onChange, placeholder, path, }: {
    possibleChoices: Array<string>;
    chosenChoices: Array<string>;
    onChange: (chosenChoices: Array<string>) => void;
    placeholder: string;
    path: string;
}): ReactElement;

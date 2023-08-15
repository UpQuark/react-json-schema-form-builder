import { ReactElement } from 'react';
import type { SectionPropsType } from './types';
export default function Section({ name, required, schema, uischema, onChange, onNameChange, onRequireToggle, onDependentsChange, onDelete, onMoveUp, onMoveDown, path, definitionData, definitionUi, hideKey, reference, dependents, dependent, parent, parentProperties, neighborNames, cardOpen, setCardOpen, allFormInputs, mods, categoryHash, }: SectionPropsType): ReactElement;

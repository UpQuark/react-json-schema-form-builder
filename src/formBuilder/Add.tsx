import React, { useState } from 'react';
import {
  Popover,
  Button,
  Tooltip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import { getRandomId } from './utils';
import type { ModLabels } from './types';

export default function Add({
  addElem,
  hidden,
  tooltipDescription,
  labels,
}: {
  addElem: (choice: string) => void;
  hidden?: boolean;
  tooltipDescription?: string;
  labels?: ModLabels;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [createChoice, setCreateChoice] = useState('card');
  const [elementId] = useState(getRandomId());

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: hidden ? 'none' : 'initial' }}>
      <Tooltip
        title={tooltipDescription || 'Create new form element'}
        placement='top'
      >
        <Button onClick={handleOpen} variant={'outlined'} color={'primary'}>
          Add new form element
        </Button>
      </Tooltip>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ padding: 30 }}
      >
        <Typography variant='h6' style={{ padding: '8px 16px' }}>
          Create New
        </Typography>
        <div style={{ padding: 16 }}>
          <RadioGroup
            value={createChoice}
            onChange={(event) => setCreateChoice(event.target.value)}
          >
            <FormControlLabel
              value='card'
              control={<Radio />}
              label={labels?.addElementLabel ?? 'Form element'}
            />
            <FormControlLabel
              value='section'
              control={<Radio />}
              label={labels?.addSectionLabel ?? 'Form section'}
            />
          </RadioGroup>
          <div>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                addElem(createChoice);
                handleClose();
              }}
              color='primary'
            >
              Create
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}

import Icon from '@mdi/react';
import React, { FunctionComponent, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
  } from '@mui/material';

import {
  mdiDiceD20,
  mdiDiceD12,
  mdiDiceD10,
  mdiDiceD8,
  mdiDiceD6,
  mdiDiceD4,
} from "@mdi/js";

type DiceSelectorProps = {};

export enum Dice {
  D20 = "D20",
  D12 = "D12",
  D10 = "D10",
  D8 = "D8",
  D6 = "D6",
  D4 = "D4",
}

const DiceSelector: FunctionComponent<DiceSelectorProps> = () => {
  const [selectedDice, setSelectedDice] = useState<Dice>(Dice.D20);

  return (
    <>
      <FormControl>
        <InputLabel>Dé</InputLabel>
        <Select
          value={selectedDice}
          onChange={(e) => setSelectedDice(e.target.value as Dice)}
          label="Dé"
          autoWidth
        >
          <MenuItem value={Dice.D20}>
            <Icon path={mdiDiceD20} size={1} horizontal vertical rotate={180} />
          </MenuItem>
          <MenuItem value={Dice.D12}>
            <Icon path={mdiDiceD12} size={1} horizontal vertical rotate={180} />
          </MenuItem>
          <MenuItem value={Dice.D10}>
            <Icon path={mdiDiceD10} size={1} horizontal vertical rotate={180} />
          </MenuItem>
          <MenuItem value={Dice.D8}>
            <Icon path={mdiDiceD8} size={1} horizontal vertical rotate={180} />
          </MenuItem>
          <MenuItem value={Dice.D6}>
            <Icon path={mdiDiceD6} size={1} horizontal vertical rotate={180} />
          </MenuItem>
          <MenuItem value={Dice.D4}>
            <Icon path={mdiDiceD4} size={1} horizontal vertical rotate={180} />
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default DiceSelector;

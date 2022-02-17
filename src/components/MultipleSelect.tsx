import { ReactNode, useState } from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface MultipleSelectProps {
  FormControlProps?: FormControlProps;
  children: ReactNode;
  label: string;
  name: string;
}

const MultipleSelect = (props: MultipleSelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { children, label, name, ...FormControlProps } = props;
  return (
    <FormControl variant="standard" fullWidth {...FormControlProps}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        name={name}
        multiple
        value={selected}
        onChange={({
          target: { value },
        }: SelectChangeEvent<typeof selected>) => {
          setSelected(typeof value === 'string' ? value.split(',') : value);
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;

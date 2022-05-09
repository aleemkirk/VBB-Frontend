import * as React from 'react';
import {
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  OutlinedInput,
  FormControl,
  Box,
  Chip 
} from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import * as actions from '../../../redux/actions';
import { Oppty } from '../../../redux/opportunity/opportunity.types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const opptyOptions = (oppties: Oppty[]) =>
oppties.map((oppty) => (
    <MenuItem key={oppty.id} value={oppty.id}>
      <ListItemText primary={`${oppty.name}`} />
    </MenuItem>
  ));
interface Props {
  selectedOppties: number[];
  handleSelectOppties: (opptyIds: number[]) => void;
}
const OpptyDropdown = ({ selectedOppties, handleSelectOppties }: Props) => {
  const oppties = useSelector((state: AppState) => state.oppty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getOppty());
  }, []);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectOppties(value);
    }
  };
// const names = [
//   'Option1',
//   'Option2',
//   'Option3',
//   'Option4',
//   'Option5',
//   'Option6',
//   'Option7',
//   'Option8',
// ];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function OpportunitySelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState<string[]>([]);

//   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Please Select</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedOppties}
          // value={personName}
          onChange={handleSelect}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
        {opptyOptions(oppties)}
          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </div>
  );
}

export default OpptyDropdown;
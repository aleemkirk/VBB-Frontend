import {
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  OutlinedInput,
  FormControl,
  Box,
  Chip,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { getOpportunity } from '../../redux/actions';
import { Opportunity } from '../../redux/opportunity/opportunity.types';

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

const opportunityOptions = (opportunities: Opportunity[]) =>
  opportunities.map((opportunity) => (
    <MenuItem key={opportunity.id} value={opportunity.id}>
      <ListItemText primary={`${opportunity.name}`} />
    </MenuItem>
  ));
interface Props {
  selectedOpportunities: number[];
  handleSelectOpportunities: (opportunityIds: number[]) => void;
}
const OpportunityDropdown = ({
  selectedOpportunities,
  handleSelectOpportunities,
}: Props) => {
  const opportunities = useSelector((state: AppState) => state.opportunity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOpportunity());
  }, [dispatch]);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectOpportunities(value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-chip-label">Please Select</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectedOpportunities}
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
        {opportunityOptions(opportunities)}
      </Select>
    </FormControl>
  );
};

export default OpportunityDropdown;

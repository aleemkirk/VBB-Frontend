import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { getTimezones } from '../../redux/actions';

const timezonesOptions = (timezones: string[]) =>
  timezones.map((timezone) => (
    <MenuItem key={timezone} value={timezone}>
      <ListItemText primary={`${timezone}`} />
    </MenuItem>
  ));

interface Props {
  selectedTimezone: string;
  handleSelectTimezone: (timezone: string) => void;
}
const TimezonesDropdown = ({
  selectedTimezone,
  handleSelectTimezone,
}: Props) => {
  const timezones = useSelector((state: AppState) => state.timezones);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimezones());
  }, [dispatch]);

  const handleSelect = (e: SelectChangeEvent<string>) => {
    handleSelectTimezone(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="timezone-select">Select Your Timezone</InputLabel>
      <Select
        label="Select Your timezone"
        labelId="timezone-select"
        id="select-timezones-dropdown"
        value={selectedTimezone}
        onChange={handleSelect}
      >
        {timezonesOptions(timezones)}
      </Select>
    </FormControl>
  );
};

export default TimezonesDropdown;

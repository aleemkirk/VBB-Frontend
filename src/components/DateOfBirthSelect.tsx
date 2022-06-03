import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

interface Props {
  dateOfBirth: string;
  handleDateOfBirthChange: (dateOfBirth: string) => void;
}

const DateOfBirthSelector = ({
  dateOfBirth,
  handleDateOfBirthChange,
}: Props) => {
  const [value, setValue] = useState<DateTime>(DateTime.fromISO(dateOfBirth));

  useEffect(() => {
    handleDateOfBirthChange(value.toISO());
  }, [value, handleDateOfBirthChange]);

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePicker
        openTo="year"
        value={value}
        label="Select Birthday"
        onChange={(newValue) => {
          if (newValue) setValue(newValue);
        }}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};

export default DateOfBirthSelector;

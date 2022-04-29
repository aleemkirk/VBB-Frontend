import {
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import * as actions from '../../redux/actions';
import { Career } from '../../redux/careers/careers.types';

const careerOptions = (careers: Career[]) =>
  careers.map((career) => (
    <MenuItem key={career.id} value={career.id}>
      <ListItemText primary={`${career.name}`} />
    </MenuItem>
  ));

interface Props {
  selectedCareers: number[];
  handleSelectCareers: (careerIds: number[]) => void;
}
const CareerDropdown = ({ selectedCareers, handleSelectCareers }: Props) => {
  const careers = useSelector((state: AppState) => state.careers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCareers());
  }, []);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectCareers(value);
    }
  };

  return (
    <div>
      <InputLabel id="multi-career-select">Select Your Careers</InputLabel>
      <Select
        labelId="multi-career-select"
        id="select-careers-dropdown"
        multiple
        value={selectedCareers}
        onChange={handleSelect}
      >
        {careerOptions(careers)}
      </Select>
    </div>
  );
};

export default CareerDropdown;

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
import { Subject } from '../../redux/subjects/subjects.types';

const subjectOptions = (subjects: Subject[]) =>
  subjects.map((subject) => (
    <MenuItem key={subject.id} value={subject.id}>
      <ListItemText primary={`${subject.name}`} />
    </MenuItem>
  ));

interface Props {
  selectedSubjects: number[];
  handleSelectSubjects: (subjectIds: number[]) => void;
}

const SubjectDropdown = ({ selectedSubjects, handleSelectSubjects }: Props) => {
  const subjects = useSelector((state: AppState) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSubjects());
  }, []);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectSubjects(value);
    }
  };

  return (
    <div>
      <InputLabel id="multi-language-select">Select Your subjects</InputLabel>
      <Select
        labelId="multi-subject-select"
        id="select-subjects-dropdown"
        multiple
        value={selectedSubjects}
        onChange={handleSelect}
      >
        {subjectOptions(subjects)}
      </Select>
    </div>
  );
};

export default SubjectDropdown;

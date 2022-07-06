import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  Chip
} from '@mui/material';
import { useEffect, useState } from 'react';
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
  isRequired?:boolean;
}

const SubjectDropdown = ({ selectedSubjects, handleSelectSubjects, isRequired}: Props) => {
  const subjects = useSelector((state: AppState) => state.subjects);
  const dispatch = useDispatch();

  const [actvieSubjectOptions, setActvieSubjectOptions] = useState<any>([])

  useEffect(() => {
    dispatch(actions.getSubjects());
  }, [dispatch]);


  useEffect(() => {
    if (subjects !== undefined && subjects !== null) {
      var tempArr:any = []
      subjects.forEach(element => {
        tempArr.push({id:element.id, name:element.name, value:element.id})
      });
      setActvieSubjectOptions(tempArr)
    }
  }, [subjects]);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    console.log(e)
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectSubjects(value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="multi-language-select">Select Your Subjects</InputLabel>
      <Select
        label="Select Your Subjects"
        labelId="multi-subject-select"
        id="select-subjects-dropdown"
        multiple
        required={isRequired ? true : false}
        value={selectedSubjects}
        onChange={handleSelect}
        renderValue={(selected) => (
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
           {selected.map((id) => (
             <Chip key={id} label={actvieSubjectOptions?.find((e:any) => e.id === id).name} />
           ))}
         </Box>
         )}
      >
        {subjectOptions(actvieSubjectOptions)}
      </Select>
    </FormControl>
  );
};

export default SubjectDropdown;

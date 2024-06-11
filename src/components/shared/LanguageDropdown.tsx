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
import { getLanguages } from '../../redux/actions';
import { Language } from '../../redux/language/language.types';

const languageOptions = (languages: Language[]) =>
  languages.map((lang) => (
    <MenuItem key={lang.id} value={lang.id}>
      <ListItemText
        primary={`${lang.englishDisplayName} - ${lang.nameInNativeAlphabet}`}
      />
    </MenuItem>
  ));

interface Props {
  selectedLanguages: number[];
  handleSelectLanguages: (languageIds: number[]) => void;
  isRequired?: boolean;
}

const LanguageDropdown = ({
  selectedLanguages,
  handleSelectLanguages,
  isRequired,
}: Props) => {
  const languages = useSelector((state: AppState) => state.languages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectLanguages(value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="multi-language-select">Select Your Languages</InputLabel>
      <Select
        label="Select Your Languages"
        labelId="multi-language-select"
        id="select-language-dropdown"
        required={isRequired ? true : false}
        multiple
        value={selectedLanguages}
        onChange={handleSelect}
      >
        {languageOptions(languages)}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;

import {
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import { getLanguages } from '../redux/actions';
import { Language } from '../redux/language/language.types';

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
}

const LanguageDropdown = ({
  selectedLanguages,
  handleSelectLanguages,
}: Props) => {
  const languages = useSelector((state: AppState) => state.languages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectLanguages(value);
    }
  };

  return (
    <div>
      <InputLabel id="multi-language-select">Select Your Languages</InputLabel>
      <Select
        labelId="multi-language-select"
        id="select-language-dropdown"
        multiple
        value={selectedLanguages}
        onChange={handleSelect}
      >
        {languageOptions(languages)}
      </Select>
    </div>
  );
};

export default LanguageDropdown;

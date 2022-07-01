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
import { getGenres } from '../../redux/actions';
import { Genre } from '../../redux/genre/genre.types';

const genreOptions = (genres: Genre[]) =>
  genres.map((genre) => (
    <MenuItem key={genre.id} value={genre.id}>
      <ListItemText
        primary={`${genre.name}`}
      />
    </MenuItem>
  ));

interface Props {
  selectedGenres: number[];
  handleSelectGenres: (genreIds: number[]) => void;
}

const GenreDropdown = ({
  selectedGenres,
  handleSelectGenres,
}: Props) => {
  const genres = useSelector((state: AppState) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelect = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    if (Array.isArray(value)) {
      handleSelectGenres(value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="multi-genre-select">Select Your Genres</InputLabel>
      <Select
        label="Select Your Genres"
        labelId="multi-genre-select"
        id="select-genre-dropdown"
        multiple
        value={selectedGenres}
        onChange={handleSelect}
      >
        {genreOptions(genres)}
      </Select>
    </FormControl>
  );
};

export default GenreDropdown;

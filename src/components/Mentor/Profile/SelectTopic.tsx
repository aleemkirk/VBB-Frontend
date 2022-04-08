import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const names = [
  'Topic1',
  'Topic2',
  'Topic3',
  'Topic4',
  'Topic5',
  'Topic6',
  'Topic7',
  'Topic8',
  'Topic9',
];

export default function SelectTopic() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Topic
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
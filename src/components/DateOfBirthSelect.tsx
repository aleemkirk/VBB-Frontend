interface Props {
  dateOfBirth: string;
  handleDateOfBirthChange: (dateOfBirth: string) => void;
}

const DateOfBirthSelector = ({
  dateOfBirth,
  handleDateOfBirthChange,
}: Props) => {
  const handleDateSelect = (newValue: Date | null) => {
    if (newValue) {
      handleDateOfBirthChange('22/11/1999');
    }
  };
  return <div>place holder date picker </div>;
};

export default DateOfBirthSelector;

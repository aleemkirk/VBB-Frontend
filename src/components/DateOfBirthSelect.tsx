interface Props {
  dateOfBirth: string;
  handleDateOfBirthChange: (dateOfBirth: string) => void;
}
const DateOfBirthSelector = ({
  dateOfBirth,
  handleDateOfBirthChange,
}: Props) => {
  const handleDateSelect = () => {
    handleDateOfBirthChange('11/22/1999');
  };
  return <div>date of birth</div>;
};

export default DateOfBirthSelector;

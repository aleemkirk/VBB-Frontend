interface Props {
  dateOfBirth: string;
  handleDateOfBirthChange: (dateOfBirth: string) => void;
}
const DateOfBirthSelector = ({
  dateOfBirth,
  handleDateOfBirthChange,
}: Props) => {
  return <div>date of birth</div>;
};

export default DateOfBirthSelector;

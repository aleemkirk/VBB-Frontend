import { ComponentPropsWithoutRef, ElementType } from 'react';
import { ButtonBase, Typography } from '@mui/material';

type ButtonBaseProps<T extends ElementType> = {
  renderAs?: T;
  children: React.ReactNode;
  disabled?: boolean;
  complete?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<T>;

const OnboardingButton = <T extends ElementType = 'button'>({
  renderAs,
  children,
  disabled,
  complete,
  onClick,
  ...rest
}: ButtonBaseProps<T>): JSX.Element => {
  return (
    <ButtonBase
      as={renderAs}
      sx={{
        textTransform: 'none',
        textAlign: 'left',
        border: 1,
        p: 1,
        height: 75,
        borderColor: 'aliceblue',
        '&:hover': {
          backgroundColor: 'aliceblue',
          opacity: [0.9, 0.8, 0.7],
          cursor: 'pointer',
        },
        backgroundColor: 'transparent',
        ...(complete && { backgroundColor: 'aliceblue' }),
      }}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <Typography>{children}</Typography>
    </ButtonBase>
  );
};

export default OnboardingButton;

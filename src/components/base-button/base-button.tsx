import Button from '@material-ui/core/Button';

interface BaseButtonProps {
  buttonText: string;
}

function BaseButton({ buttonText }: BaseButtonProps) {
  return (
    <Button variant="contained" color="primary">
      {buttonText}
    </Button>
  );
}

export default BaseButton;

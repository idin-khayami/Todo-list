import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface BaseButtonProps {
  label: string
  color: any //ToDo
  className?: string
  outline?: boolean
  loading?: boolean
  disabled?: boolean
}

function BaseButton({
  label,
  color,
  className = '',
  outline = false,
  loading = false,
  disabled = false,
}: BaseButtonProps) {
  const variant = outline ? 'outlined' : 'contained';

  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      disabled={disabled}
    >
      {label}
      {loading && <CircularProgress />}
    </Button>
  );
}

export default BaseButton;

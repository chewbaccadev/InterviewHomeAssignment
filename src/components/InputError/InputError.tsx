import { StyledError } from './InputError.style';

type Props = { message: string };

const InputError = ({ message }: Props) => {
  return <StyledError>{message}</StyledError>;
};

export default InputError;

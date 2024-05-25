import { ChangeEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import randomUserURL from '../../consts/randomUserURL';
import userFields from '../../consts/userFields';
import { setUsers } from '../../store/usersSlice';
import InputError from '../InputError/InputError';
import { StyledInput, StyledLabel } from './styles';

export const Input = () => {
  // store
  const dispatch = useDispatch();

  // states
  const [value, setValue] = useState<number | string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  // input logic
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const eventValue = e.target.value;
    if (eventValue === '') {
      setErrorMessage('');
      setValue('');
    } else if (+eventValue < 1 || +eventValue > 5000) {
      setValue((prev) => prev);
      setErrorMessage('The number can only be between 1 and 5000!');
    } else {
      setErrorMessage('');
      setValue(+eventValue);
    }
  };

  // fetch and store logic
  useEffect(() => {
    if (value && (+value > 0 || +value < 5001)) {
      setLoading(true);
      const fetchTimeout = setTimeout(() => {
        fetch(`${randomUserURL}/api/?inc=${userFields}&results=${value}`)
          .then((response) => {
            response.json().then((randomUsers) => {
              const usersArray = randomUsers.results;
              dispatch(setUsers(usersArray));
            });
          })
          .catch((err) => {
            console.error(err);
            setApiError('Something has gone wrong.');
          });
        setLoading(false);
      }, 500);
      return () => {
        setLoading(false);
        clearTimeout(fetchTimeout);
      };
    }
  }, [value]);

  return (
    <StyledLabel>
      How many users would you like to fetch?
      <StyledInput
        type='number'
        min={1}
        max={5000}
        step={1}
        placeholder='Ex: 3'
        value={value}
        onChange={changeHandler}
      />
      {errorMessage && <InputError message={errorMessage} />}
      {loading && <p>Loading users...</p>}
      {apiError && <p>{apiError}</p>}
    </StyledLabel>
  );
};

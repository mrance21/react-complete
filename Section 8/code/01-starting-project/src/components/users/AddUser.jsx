import { useRef, useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const nameInputeRef = useRef();
  const ageInputeRef = useRef();

  // const [enteredUserName, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // const usernameChangeHandler = event => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = event => {
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = event => {
    event.preventDefault();
    const enteredName = nameInputeRef.current.value;
    const enteredUserAge = ageInputeRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age (>0)',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputeRef.current.value = '';
    ageInputeRef.current.value = '';

    // setEnteredUsername('');
    // setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              // onChange={usernameChangeHandler}
              // value={enteredUserName}
              type='text'
              ref={nameInputeRef}
            />
          </div>
          <div>
            <label htmlFor='age'>Age(Years)</label>
            <input
              id='age'
              // onChange={ageChangeHandler}
              // value={enteredAge}
              type='number'
              ref={ageInputeRef}
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

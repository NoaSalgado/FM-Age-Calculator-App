import DateForm from './components/DateForm/DateForm';
import Age from './components/Age/Age';
import './App.css';
import { useState } from 'react';

import calculateAge from './helpers/calculateAge';

function App() {
  const [age, setAge] = useState({
    days: '',
    months: '',
    years: '',
  });

  function getAge(day, month, year) {
    const age = calculateAge(day, month, year);
    setAge(age);
  }
  return (
    <>
      <DateForm getAge={getAge} />
      <Age age={age} />
    </>
  );
}

export default App;

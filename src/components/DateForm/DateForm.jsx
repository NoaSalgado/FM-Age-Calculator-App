import { useState } from 'react';
import Divider from '../Divider/Divider';
import './DateForm.css';
import {
  isAValidDay,
  isAValidMonth,
  isAValidYear,
} from '../../helpers/validateDate';

function DateForm() {
  const [formData, setFormData] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [dayIsValid, setDayIsValid] = useState(true);
  const [monthIsValid, setMonthIsValid] = useState(true);
  const [yearIsValid, setYearIsValid] = useState(true);

  function handleInputchange({ target }) {
    const { name, value } = target;
    // User can only enter numbers
    if (isNaN(value)) return;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { day, month, year } = formData;

    isAValidDay(day, month, year) ? setDayIsValid(true) : setDayIsValid(false);
    isAValidMonth(month) ? setMonthIsValid(true) : setMonthIsValid(false);
    isAValidYear(year) ? setYearIsValid(true) : setYearIsValid(false);

    if (
      isAValidDay(day, month, year) &&
      isAValidMonth(month) &&
      isAValidYear(year)
    ) {
      setFormData({
        day: '',
        month: '',
        year: '',
      });
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-controls-container'>
        <div className='form-control'>
          <label htmlFor='day' className={`${dayIsValid ? '' : 'error'}`}>
            Day
          </label>
          <input
            className={`${dayIsValid ? '' : 'error'}`}
            type='text'
            placeholder='DD'
            name='day'
            id='day'
            value={formData.day}
            onChange={handleInputchange}
          />
          {!dayIsValid && <p className='error-message'>Must be a valid day</p>}
        </div>

        <div className='form-control'>
          <label htmlFor='month' className={`${monthIsValid ? '' : 'error'}`}>
            Month
          </label>
          <input
            className={`${monthIsValid ? '' : 'error'}`}
            type='text'
            placeholder='MM'
            name='month'
            id='month'
            value={formData.month}
            onChange={handleInputchange}
          />
          {!monthIsValid && (
            <p className='error-message'>Must be a valid month</p>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='year' className={`${yearIsValid ? '' : 'error'}`}>
            Year
          </label>
          <input
            className={`${yearIsValid ? '' : 'error'}`}
            type='text'
            placeholder='YYYY'
            name='year'
            id='year'
            value={formData.year}
            onChange={handleInputchange}
          />
          {!yearIsValid && <p className='error-message'>Must be in the past</p>}
        </div>
      </div>

      <Divider />
    </form>
  );
}

export default DateForm;

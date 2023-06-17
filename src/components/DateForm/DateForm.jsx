import Divider from '../Divider/Divider';
import './DateForm.css';

function DateForm() {
  return (
    <form className='form'>
      <div className='form-controls-container'>
        <div className='form-control'>
          <label htmlFor='day'>Day</label>
          <input type='text' placeholder='DD' name='day' id='day' />
        </div>

        <div className='form-control'>
          <label htmlFor='month'>Month</label>
          <input type='text' placeholder='MM' name='month' id='month' />
        </div>

        <div className='form-control'>
          <label htmlFor='year'>Year</label>
          <input type='text' placeholder='YYYY' name='year' id='year' />
        </div>
      </div>

      <Divider />
    </form>
  );
}

export default DateForm;

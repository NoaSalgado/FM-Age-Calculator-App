import './Age.css';

function Age({ age }) {
  const { days, months, years } = age;
  return (
    <div className='age'>
      <p>
        <span>{days ? days : '--'}</span> {days !== 1 ? 'days' : 'day'}
      </p>
      <p>
        <span>{months || months === 0 ? months : '--'}</span>{' '}
        {months !== 1 ? 'months' : 'month'}
      </p>
      <p>
        <span>{years ? years : '--'}</span> {years !== 1 ? 'years' : 'year'}
      </p>
    </div>
  );
}

export default Age;

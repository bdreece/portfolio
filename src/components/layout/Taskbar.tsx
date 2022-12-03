import type { FC } from 'react';

import { useState, useEffect } from 'react';

import styles from '../../styles/Taskbar.module.scss';

const getTime = (): string => {
  const date = new Date();
  let ampm = 'AM';
  let hoursNum = date.getHours();
  if (hoursNum > 12) {
    hoursNum -= 12;
    ampm = 'PM';
  }
  const hours = `0${hoursNum}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes} ${ampm}`;
};

const Taskbar: FC = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 10000);
  }, []);

  return (
    <section className={`window ${styles.taskbar}`}>
      <button>
        <img
          src='start.png'
          width={48}
          height={16}
        />
      </button>
      <div className='spacer' />
      <div className='status-bar'>
        <div className='status-bar-field'>{time}</div>
      </div>
    </section>
  );
};
export default Taskbar;

import React, { useEffect, useState } from 'react';
import './clock.css';

/**
 * persistent clock at the top right corner
 *
 * @returns rendered componend
 */
const Clock = (): JSX.Element => {
  const [clock, setClock] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, []);

  return (
    <div className="clock">
      {`
        ${clock.getHours() < 10 ? '0' + clock.getHours() : clock.getHours()}:
        ${clock.getMinutes() < 10 ? '0' + clock.getMinutes() : clock.getMinutes()}:
        ${clock.getSeconds() < 10 ? '0' + clock.getSeconds() : clock.getSeconds()}
      `}
    </div>
  );
};

export default Clock;

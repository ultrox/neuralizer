import { useEffect, useState } from 'react';

import styles from '~/styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  const [flash, setFlash] = useState(false);
  const [showMessage, setShowMsg] = useState(false);
  const [live, setLive] = useState(false);

  const setFlashOn = () => {
    setFlash(true);
  };
  const setFlashOff = () => setFlash(false);

  useEffect(() => {
    let id: NodeJS.Timeout;
    id = setTimeout(() => {
      setFlashOff();
    }, 300);
    return () => clearTimeout(id);
  }, [flash]);

  useEffect(() => {
    let id: NodeJS.Timeout;
    id = setTimeout(() => {
      setShowMsg(false);
    }, 3000);
    return () => clearTimeout(id);
  }, [showMessage]);

  const turnNeuralizorOn = () => {
    setLive(true);
    setTimeout(() => {
      setLive(false);
      setFlashOn();
      setShowMsg(true);
    }, 1000);
  };
  const cssForFlash = flash ? 'block' : 'none';
  const buttonStyle = live ? 'flashButton live' : 'flashButton';

  return (
    <>
      <div className="flash" style={{ display: cssForFlash }} />
      <div className="parent">
        {showMessage ? (
          <div className="message">
            <p>Covid Is Over</p>
            <p>You Love Ukraine NOW!!</p>
          </div>
        ) : (
          <div className="dot">
            <button onClick={turnNeuralizorOn} className={buttonStyle}></button>
          </div>
        )}
      </div>
    </>
  );
}

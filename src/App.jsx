import { Updater } from './components/Updater';
import { CV } from './components/CV';
import { useState } from 'react';
import './index.css';

export function App() {
  const [pvtInfo, setPvtInfo] = useState({
    fullname: 'Kenny McCormick',
    email: 'mail@email.com',
    phone: '+53324',
  });

  return (
    <>
      <main className="main">
        <Updater pvtInfo={pvtInfo} setPvtInfo={setPvtInfo} />
        <CV personal={pvtInfo} />
      </main>
    </>
  );
}

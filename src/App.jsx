import { Updater } from './components/Updater';
import { CV } from './components/CV';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

export function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: 'Kenny McCormick',
    email: 'kenny@mail.com',
    phone: '+324523562',
  });

  const [eduInfo, setEduInfo] = useState([
    {
      id: uuidv4(),
      institute: 'MIT',
      study: 'Law',
      start: '12222',
      end: '1455',
    },
    {
      id: uuidv4(),
      institute: 'Harvard',
      study: 'Law',
      start: '12222',
      end: '1455',
    },
    {
      id: uuidv4(),
      institute: 'Stanford',
      study: 'Law',
      start: '12222',
      end: '1455',
    },
  ]);

  function handlePersonalInfo(value, property) {
    const clone = { ...personalInfo };
    clone[property] = value;

    setPersonalInfo(clone);
  }

  function handleEduInfo(value, id, property) {
    const updatedArray = eduInfo.map((el) => {
      if (el.id == id) {
        el[property] = value;
      }

      return el;
    });

    setEduInfo(updatedArray);
  }

  return (
    <>
      <main className="main">
        <Updater
          personalInfo={personalInfo}
          personalHandler={handlePersonalInfo}
          eduInfo={eduInfo}
          eduHandler={handleEduInfo}
        />
        <CV personalInfo={personalInfo} eduInfo={eduInfo} />
      </main>
    </>
  );
}

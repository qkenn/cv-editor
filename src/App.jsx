import { Editor } from './components/Editor';
import { CV } from './components/CV';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

export function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: 'Kenny McCormick',
    email: 'kenny@mail.com',
    phone: '+324523562',
  });

  const [eduDetails, setEduDetails] = useState([
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
      study: 'Computer D',
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

  const [workDetails, setWorkDetails] = useState([
    {
      id: uuidv4(),
      company: 'Google',
      position: 'CFO',
      roles: 'Finance',
      start: '2005',
      end: '2008',
    },
    {
      id: uuidv4(),
      company: 'Facebook',
      position: 'CFO',
      roles: 'Finance',
      start: '2005',
      end: '2008',
    },
    {
      id: uuidv4(),
      company: 'Netflix',
      position: 'CFO',
      roles: 'Finance',
      start: '2005',
      end: '2008',
    },
  ]);

  function updatePersonal(data) {
    setPersonalDetails(data);
  }

  function updateEdu(data) {
    setEduDetails(data);
  }

  function updateWork(data) {
    setWorkDetails(data);
  }

  return (
    <>
      <main className="main">
        <Editor
          personalDetails={personalDetails}
          personalHandler={updatePersonal}
          eduDetails={eduDetails}
          eduHandler={updateEdu}
          workDetails={workDetails}
          workHandler={updateWork}
        />
        <CV
          personalDetails={personalDetails}
          eduDetails={eduDetails}
          workDetails={workDetails}
        />
      </main>
    </>
  );
}

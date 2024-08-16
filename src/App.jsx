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

  // function handleEdu(value, id, property) {
  //   const updatedArray = eduDetails.map((el) => {
  //     if (el.id == id) {
  //       el[property] = value;
  //     }

  //     return el;
  //   });

  //   setEduDetails(updatedArray);
  // }

  function savePersonal(data) {
    setPersonalDetails(data);
  }

  function updateEdu(data) {
    setEduDetails(data);
  }

  return (
    <>
      <main className="main">
        <Editor
          personalDetails={personalDetails}
          eduDetails={eduDetails}
          personalHandler={savePersonal}
          updateEdu={updateEdu}
        />
        <CV personalDetails={personalDetails} eduDetails={eduDetails} />
      </main>
    </>
  );
}

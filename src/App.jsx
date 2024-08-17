import Editor from './components/Editor';
import CV from './components/CV';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: 'Kenny McCormick',
    email: 'kenny@mail.com',
    phone: '(415) 876-5432',
  });

  const [eduDetails, setEduDetails] = useState([
    {
      id: uuidv4(),
      institute: 'Stockholm University',
      study: 'Business and Economics',
      start: '2021/04',
      end: '2023/04',
    },
    {
      id: uuidv4(),
      institute: 'Berlin University',
      study: 'Computer Science',
      start: '2017/03',
      end: '2020/05',
    },
    {
      id: uuidv4(),
      institute: 'Oslo Public School',
      study: 'Upper Secondory',
      start: '2015/02',
      end: '2017/02',
    },
  ]);

  const [workDetails, setWorkDetails] = useState([
    {
      id: uuidv4(),
      company: 'DEF Agency',
      position: 'Web Developer',
      roles:
        'Worked on troubleshooting and resolving website issues, Assisted in the development of e-commerce websites using WooCommerce',
      start: '2018/11',
      end: 'present',
    },
    {
      id: uuidv4(),
      company: 'GHI Startups',
      position: 'Front-end Developer',
      roles:
        'Developed responsive and interactive web pages using HTML, CSS, and JavaScript, Worked on creating wireframes and prototypes for new projects, Collaborated with designers to implement visual design concepts',
      start: '2015/08',
      end: '2018/10',
    },
    {
      id: uuidv4(),
      company: 'JKL Web Solutions ',
      position: 'Junior Web Developer',
      roles:
        'Assisted in the development of simple web pages using HTML, CSS, and JavaScript, Learned and implemented basic web development concepts, Worked on updating and existing websites',
      start: '2014/07',
      end: '2015/04',
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

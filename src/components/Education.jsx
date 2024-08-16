import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function Education({ eduDetails, updateEdu }) {
  const [mode, setMode] = useState('display');
  const [userData, setUserData] = useState({
    id: uuidv4(),
    institute: '',
    study: '',
    start: '',
    end: '',
  });

  function handleEditMode(id) {
    const activeEntry = eduDetails.find((el) => el.id == id);
    setUserData(activeEntry);

    changeMode('edit');
  }

  function handleCreateMode() {
    setUserData({
      id: uuidv4(),
      institute: '',
      study: '',
      start: '',
      end: '',
    });

    changeMode('create');
  }

  function changeMode(newMode) {
    setMode((prev) => {
      if (prev == newMode) return 'display';

      return newMode;
    });
  }

  function handleEdit(e) {
    e.preventDefault();

    const updatedData = eduDetails.map((el) => {
      if (el.id == userData.id) {
        el = userData;
      }

      return el;
    });

    updateEdu(updatedData);
  }

  function handleCreate(e) {
    e.preventDefault();

    const clonedEntries = [...eduDetails];
    clonedEntries.push(userData);

    updateEdu(clonedEntries);
  }

  function handleDelete(id) {
    const filteredArray = eduDetails.filter((el) => el.id != id);
    updateEdu(filteredArray);
  }

  let handler;
  let handlerMsg;

  if (mode == 'edit') {
    handler = (e) => handleEdit(e);
    handlerMsg = 'edit';
  }

  if (mode == 'create') {
    handler = (e) => handleCreate(e);
    handlerMsg = 'create';
  }

  return (
    <>
      <div className="updater-section">
        <h2>Education</h2>

        <ul className="entry-list">
          {eduDetails.map((el) => {
            return (
              <li className="entry" key={el.id}>
                {el.institute}
                <div>
                  <button onClick={() => handleEditMode(el.id)}>edit</button>
                  <button onClick={() => handleDelete(el.id)}>delete</button>
                </div>
              </li>
            );
          })}
        </ul>

        {(mode == 'edit' || mode == 'create') && (
          <form className="form">
            <div className="form-field">
              <label htmlFor="institute">Institution</label>
              <input
                type="text"
                id="institute"
                className="input-field"
                value={userData.institute}
                onChange={(e) =>
                  setUserData({ ...userData, institute: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="study">Area of Study</label>
              <input
                type="text"
                id="study"
                className="input-field"
                value={userData.study}
                onChange={(e) =>
                  setUserData({ ...userData, study: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <div className="twin-field-container">
                <div className="form-field">
                  <label htmlFor="edu-start">Start Date</label>
                  <input
                    type="text"
                    id="edu-start"
                    className="input-field twin-field"
                    value={userData.start}
                    onChange={(e) =>
                      setUserData({ ...userData, start: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="edu-end">End Date</label>
                  <input
                    type="text"
                    id="edu-end"
                    className="input-field twin-field"
                    value={userData.end}
                    onChange={(e) =>
                      setUserData({ ...userData, end: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <button onClick={handler}>{handlerMsg}</button>
          </form>
        )}

        <button onClick={() => handleCreateMode()}>
          {mode == 'create' ? 'cancel' : 'add new'}
        </button>
      </div>
    </>
  );
}

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function Work({ workDetails, workHandler }) {
  const [mode, setMode] = useState('display');
  const [userData, setUserData] = useState({
    id: uuidv4(),
    company: '',
    position: '',
    roles: '',
    start: '',
    end: '',
  });

  function handleEditMode(id) {
    const activeEntry = workDetails.find((el) => el.id == id);
    setUserData(activeEntry);

    changeMode('edit');
  }

  function handleCreateMode() {
    setUserData({
      id: uuidv4(),
      company: '',
      position: '',
      roles: '',
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

    const updatedData = workDetails.map((el) => {
      if (el.id == userData.id) {
        el = userData;
      }

      return el;
    });

    workHandler(updatedData);
  }

  function handleCreate(e) {
    e.preventDefault();

    const clonedEntries = [...workDetails];
    clonedEntries.push(userData);

    workHandler(clonedEntries);
  }

  function handleDelete(id) {
    const filteredArray = workDetails.filter((el) => el.id != id);
    workHandler(filteredArray);
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
        <h2>Work</h2>

        <ul className="entry-list">
          {workDetails.map((el) => {
            return (
              <li className="entry" key={el.id}>
                {el.company}
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
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                className="input-field"
                value={userData.company}
                onChange={(e) =>
                  setUserData({ ...userData, company: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="study">position</label>
              <input
                type="text"
                id="position"
                className="input-field"
                value={userData.position}
                onChange={(e) =>
                  setUserData({ ...userData, position: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="study">Responsibilities in brief</label>
              <input
                type="text"
                id="roles"
                className="input-field"
                value={userData.roles}
                onChange={(e) =>
                  setUserData({ ...userData, roles: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <div className="twin-field-container">
                <div className="form-field">
                  <label htmlFor="edu-start">Start Date</label>
                  <input
                    type="text"
                    id="work-start"
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
                    id="work-end"
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

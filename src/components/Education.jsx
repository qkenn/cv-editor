import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Icon } from './Icon';

export function Education({ eduDetails, eduHandler }) {
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
    eduHandler(updatedData);

    setMode('display');
  }

  function handleCreate(e) {
    e.preventDefault();

    const clonedEntries = [...eduDetails];
    clonedEntries.unshift(userData);
    eduHandler(clonedEntries);

    setMode('display');
  }

  function handleDelete(id) {
    if (window.confirm('Are you sure ?')) {
      const filteredArray = eduDetails.filter((el) => el.id != id);
      eduHandler(filteredArray);
    }
  }

  function handleCancel(e) {
    e.preventDefault();

    setMode('display');
  }

  let handler;

  if (mode == 'edit') {
    handler = (e) => handleEdit(e);
  }

  if (mode == 'create') {
    handler = (e) => handleCreate(e);
  }

  return (
    <>
      <div className="updater-section">
        <h2>📚 Education</h2>

        <ul className="entry-list">
          {eduDetails.map((el) => {
            return (
              <li className="entry" key={el.id}>
                {el.institute}
                <div className="btns-container">
                  <button
                    className="btn btn--edit"
                    onClick={() => handleEditMode(el.id)}
                  >
                    <Icon type="edit" />
                  </button>
                  <button
                    className="btn btn--delete"
                    onClick={() => handleDelete(el.id)}
                  >
                    <Icon type="delete" />
                  </button>
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

            <div className="btns-full-container">
              <button className="btn btn--full btn--update" onClick={handler}>
                {mode == 'create' && 'Save'}
                {mode == 'edit' && 'Update'}
              </button>
              <button
                className="btn btn--full btn--cancel"
                onClick={(e) => handleCancel(e)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {mode == 'display' && (
          <button
            className="btn btn--full btn--new"
            onClick={() => handleCreateMode()}
          >
            + New
          </button>
        )}
      </div>
    </>
  );
}

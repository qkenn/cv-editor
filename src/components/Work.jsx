import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Icon from './Icon';

export default function Work({ workDetails, workHandler }) {
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

    setMode('display');
  }

  function handleCreate(e) {
    e.preventDefault();

    const clonedEntries = [...workDetails];
    clonedEntries.unshift(userData);
    workHandler(clonedEntries);

    setMode('display');
  }

  function handleDelete(id) {
    if (window.confirm('Are you sure ?')) {
      const filteredArray = workDetails.filter((el) => el.id != id);
      workHandler(filteredArray);
    }
  }

  function handleCancel(e) {
    e.preventDefault();

    setMode('display');
  }

  return (
    <>
      <div className="updater-section">
        <h2>💼 Work</h2>

        <ul className="entry-list">
          {workDetails.map((el) => {
            return (
              <li className="entry" key={el.id}>
                {el.company}
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
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                className="input-field"
                required
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
                required
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

            <div className="btns-full-container">
              {mode == 'edit' && (
                <button
                  className="btn btn--full btn--update"
                  onClick={(e) => handleEdit(e)}
                >
                  Update
                </button>
              )}
              {mode == 'create' && (
                <button
                  className="btn btn--full btn--update"
                  onClick={(e) => handleCreate(e)}
                >
                  Save
                </button>
              )}

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

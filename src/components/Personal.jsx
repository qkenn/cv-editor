import { useState } from 'react';
import Icon from './Icon';

export default function Personal({ personalDetails, personalHandler }) {
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState({
    fullname: personalDetails.fullname,
    email: personalDetails.email,
    phone: personalDetails.phone,
  });

  function handleForm(e) {
    e.preventDefault();
    personalHandler(userData);
  }

  function handleCancel(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <>
      <div className="updater-section">
        <div className="updater-header">
          <div className="editor-title-container">
            <h2 className="editor-title">👦 Personal Details</h2>
            <button
              onClick={() => setEditMode((prev) => !prev)}
              className="btn btn--edit"
            >
              <Icon type={'edit'} />
            </button>
          </div>
        </div>

        {editMode && (
          <form className="form">
            <div className="form-field">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                id="fullname"
                required
                className="input-field"
                value={userData.fullname}
                onChange={(e) =>
                  setUserData({ ...userData, fullname: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="input-field"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                className="input-field"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>

            <div className="btns-full-container">
              <button
                className="btn btn--full btn--update"
                onClick={(e) => handleForm(e)}
              >
                Update
              </button>
              {editMode && (
                <button
                  className="btn btn--full btn--cancel"
                  onClick={(e) => handleCancel(e)}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
}

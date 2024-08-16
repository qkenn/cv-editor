import { useState } from 'react';

export function Personal({ personalDetails, personalHandler }) {
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

  return (
    <>
      <div className="updater-section">
        <div className="updater-header">
          <h2>Personal Details</h2>
          <button onClick={() => setEditMode((prev) => !prev)}>edit</button>
        </div>

        {editMode && (
          <form className="form">
            <div className="form-field">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                id="fullname"
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

            <button onClick={(e) => handleForm(e)}>update</button>
          </form>
        )}
      </div>
    </>
  );
}

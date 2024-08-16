import { useState } from 'react';

export function Education({ eduInfo, handler }) {
  const [editMode, setEditMode] = useState(false);
  const [newMode, setNewMode] = useState(false);
  const [entry, setEntry] = useState({});
  const [newEntry, setNewEntry] = useState({
    id: null,
    institute: '',
    study: '',
    start: '',
    end: '',
  });

  function handleEntry(id) {
    const currentEntry = eduInfo.find((el) => el.id == id);
    setEntry(currentEntry);

    setEditMode((prev) => !prev);
  }

  return (
    <>
      <div className="updater-section">
        <h2>Education</h2>

        <ul className="entry-list">
          {eduInfo.map((entry) => (
            <li key={entry.id} className="entry">
              <span>{entry.institute}</span>
              <div className="entry-controls">
                <button onClick={() => handleEntry(entry.id)}>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        {(editMode || newMode) && (
          <form className="form">
            <div className="form-field">
              <label htmlFor="institute">Institution</label>
              <input
                type="text"
                id="institute"
                className="input-field"
                value={entry.institute}
                onChange={(e) => handler(e.target.value, entry.id, 'institute')}
              />
            </div>

            <div className="form-field">
              <label htmlFor="study">Area of Study</label>
              <input
                type="text"
                id="study"
                className="input-field"
                value={entry.study}
                onChange={(e) => handler(e.target.value, entry.id, 'study')}
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
                    value={entry.start}
                    onChange={(e) => handler(e.target.value, entry.id, 'start')}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="edu-end">End Date</label>
                  <input
                    type="text"
                    id="edu-end"
                    className="input-field twin-field"
                    value={entry.end}
                    onChange={(e) => handler(e.target.value, entry.id, 'end')}
                  />
                </div>
              </div>
            </div>
          </form>
        )}

        <button onClick={() => setNewMode((prev) => !prev)}>new</button>
      </div>
    </>
  );
}

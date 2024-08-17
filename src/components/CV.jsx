export function CV({ personalDetails, eduDetails, workDetails }) {
  return (
    <>
      <div className="cv">
        <div className="cv-personal">
          <h1 className="cv-name">{personalDetails.fullname}</h1>
          <address className="cv-contact">
            <span>
              {personalDetails.email && '📨️'} {personalDetails.email}
            </span>
            <span>
              {personalDetails.phone && '📞'} {personalDetails.phone}
            </span>
          </address>
        </div>

        <div className>
          <h3 className="cv-title">📚 Education</h3>

          <ul className="cv-entries">
            {eduDetails.map((entry) => (
              <li key={entry.id}>
                <div className="cv-entry-container">
                  <div className="entry-duration">
                    {(entry.start || entry.end) && '📆'} {entry.start}{' '}
                    {(entry.start || entry.end) && ' - '}
                    {entry.end}
                  </div>
                  <div className="entry-details">
                    <h4 className="cv-entry-title">
                      {entry.institute && '🏫'} {entry.institute}
                    </h4>
                    <p className="cv-entry-details">{entry.study}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="cv-title">💼 Work Experience</h3>

          <ul className="cv-entries">
            {workDetails.map((entry) => (
              <li key={entry.id}>
                <div className="cv-entry-container">
                  <div className="entry-duration">
                    {(entry.start || entry.end) && '📆'} {entry.start}{' '}
                    {(entry.start || entry.end) && ' - '}
                    {entry.end}
                  </div>
                  <div className="entry-details">
                    <h4 className="cv-entry-title">
                      {entry.company && '🏢'} {entry.company} ({entry.position})
                    </h4>
                    <p className="cv-entry-details">{entry.roles}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

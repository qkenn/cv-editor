export function CV({ personalInfo, eduInfo }) {
  return (
    <>
      <div className="cv">
        <div className="cv-personal">
          <h1 className="cv-name">{personalInfo.fullname}</h1>
          <address className="cv-contact">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
          </address>
        </div>

        <div className="cv-edu">
          <h3 className="cv-section-title">Education</h3>

          <ul>
            {eduInfo.map((entry) => (
              <li key={entry.id}>
                {entry.start} - {entry.end}, {entry.institute}, {entry.study}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

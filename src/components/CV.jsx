export function CV({ personalDetails, eduDetails }) {
  return (
    <>
      <div className="cv">
        <div className="cv-personal">
          <h1 className="cv-name">{personalDetails.fullname}</h1>
          <address className="cv-contact">
            <span>{personalDetails.email}</span>
            <span>{personalDetails.phone}</span>
          </address>
        </div>

        <div className="cv-edu">
          <h3 className="cv-section-title">Education</h3>

          <ul>
            {eduDetails.map((entry) => (
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

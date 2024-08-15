export function CV({ personal }) {
  return (
    <>
      <div className="cv-container">
        <h1 className="cv-name">{personal.fullname}</h1>
        <div className="personal-info">
          <div className="cv-email">{personal.email}</div>
          <div className="cv-phone">{personal.phone}</div>
        </div>
      </div>
    </>
  );
}

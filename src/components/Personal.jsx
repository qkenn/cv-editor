export function Personal({ personalInfo, handler }) {
  return (
    <>
      <div className="updater-section">
        <h2>Personal Details</h2>

        <form className="form">
          <div className="form-field">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              id="fullname"
              className="input-field"
              value={personalInfo.fullname}
              onChange={(e) => handler(e.target.value, 'fullname')}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={personalInfo.email}
              onChange={(e) => handler(e.target.value, 'email')}
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              id="phone"
              className="input-field"
              value={personalInfo.phone}
              onChange={(e) => handler(e.target.value, 'phone')}
            />
          </div>
        </form>
      </div>
    </>
  );
}

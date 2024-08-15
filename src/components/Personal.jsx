export function Personal({ pvtInfo, setPvtInfo }) {
  return (
    <>
      <div className="field">
        <h2>Personal Details</h2>

        <form>
          <div className="form-field">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={pvtInfo.fullname}
              onChange={(e) =>
                setPvtInfo({ ...pvtInfo, fullname: e.target.value })
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={pvtInfo.email}
              onChange={(e) =>
                setPvtInfo({ ...pvtInfo, email: e.target.value })
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={pvtInfo.phone}
              onChange={(e) =>
                setPvtInfo({ ...pvtInfo, phone: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}

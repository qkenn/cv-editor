import { Personal } from './Personal';
import { Education } from './Education';

export function Editor({
  personalDetails,
  personalHandler,
  eduDetails,
  updateEdu,
}) {
  return (
    <>
      <div className="updater">
        <Personal
          personalDetails={personalDetails}
          personalHandler={personalHandler}
        />
        <Education eduDetails={eduDetails} updateEdu={updateEdu} />
      </div>
    </>
  );
}

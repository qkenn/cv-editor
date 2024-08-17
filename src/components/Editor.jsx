import { Personal } from './Personal';
import { Education } from './Education';
import { Work } from './Work';

export function Editor({
  personalDetails,
  personalHandler,
  eduDetails,
  eduHandler,
  workDetails,
  workHandler,
}) {
  return (
    <>
      <div className="updater">
        <Personal
          personalDetails={personalDetails}
          personalHandler={personalHandler}
        />
        <Education eduDetails={eduDetails} eduHandler={eduHandler} />
        <Work workDetails={workDetails} workHandler={workHandler} />
      </div>
    </>
  );
}

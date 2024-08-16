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
        <h2 className="editor-title">Editor</h2>

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

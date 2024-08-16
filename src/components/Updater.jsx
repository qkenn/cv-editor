import { Personal } from './Personal';
import { Education } from './Education';

export function Updater({
  personalInfo,
  personalHandler,
  eduInfo,
  eduHandler,
}) {
  return (
    <>
      <div className="updater">
        <Personal personalInfo={personalInfo} handler={personalHandler} />
        <Education eduInfo={eduInfo} handler={eduHandler} />
      </div>
    </>
  );
}

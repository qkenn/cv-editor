import { Personal } from './Personal';

export function Updater({ pvtInfo, setPvtInfo }) {
  return (
    <>
      <div className="updater-container">
        <Personal pvtInfo={pvtInfo} setPvtInfo={setPvtInfo} />
      </div>
    </>
  );
}

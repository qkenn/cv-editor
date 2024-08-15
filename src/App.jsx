import { CVUpdater } from './components/CVUpdater';
import { CV } from './components/CV';
import './styles/index.css';

function App() {
  return (
    <>
      <main className="main">
        <CVUpdater />
        <CV />
      </main>
    </>
  );
}

export default App;

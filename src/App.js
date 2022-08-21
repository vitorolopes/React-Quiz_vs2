import QandA from './components/QandA'
import SetupForm from './components/SetupForm';

function App() {
  return (
    <div className="App">
      {true ? <SetupForm/> : <QandA/> }
    </div>
  );
}

export default App;

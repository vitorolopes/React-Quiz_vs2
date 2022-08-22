import QandA from './components/QandA'
import SetupForm from './components/SetupForm';
import { useStateContext } from './context/StateContextProvider';

function App() {

  const {showQandA} = useStateContext()

  return (
    <div className="App">
      {showQandA ?  <QandA/> : <SetupForm/>}
    </div>
  );
}

export default App;

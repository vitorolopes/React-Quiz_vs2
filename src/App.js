import QandA from './components/QandA'
import SetupForm from './components/SetupForm';
import { useStateContext } from './context/StateContextProvider';
import Loading from './components/Loading';

function App() {

  const {showQandA, isLoading} = useStateContext()

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="App">
      {showQandA ?  <QandA/> : <SetupForm/>}
    </div>
  );
}

export default App;

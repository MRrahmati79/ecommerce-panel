import './App.css';
import Sidbar from './components/sidbar';

function App() {
  return (
    <div className="App bg-gray-400 w-full min-h-screen fixed">
      <link rel='stylesheet' href='/fontawesome/css/all.css' />
      <div className='bg-yellow-50 w-11/12  m-auto mt-5'>

        <Sidbar></Sidbar>



      </div>

    </div>
  );
}

export default App;

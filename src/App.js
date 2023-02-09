import './App.css';
import Header from './components/header';
import Sidbar from './components/sidbar';

function App() {
  return (
    <div className="App bg-gray-400 w-full min-h-screen">
      <link rel='stylesheet' href='/fontawesome/css/all.css' />
      <div className='bg-yellow-50 w-11/12 m-auto'>


        <div className='flex'>

          <div className=" bg-slate-200 box">
            <Sidbar></Sidbar>
          </div>
          <div className='w-full'>
            <Header></Header>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;

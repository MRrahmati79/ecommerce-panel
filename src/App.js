import './App.css';
import Header from './components/header';
import Main from './components/main';
import Sidbar from './components/sidbar';

function App() {
  return (
    <div className="App bg-gray-400 w-full min-h-screen fixed">
      <link rel='stylesheet' href='/fontawesome/css/all.css' />
      <div className='bg-yellow-50 w-11/12  m-auto mt-5'>


        <div className='flex'>

          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 bg-slate-200 box">
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

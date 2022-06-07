import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ByteSend from './ByteSend';
import ByteReceive from './BytesReceived';
import Count from './Count';
import Cpuperformance from './cpuperf';
import Home from './Home';
import MemoryPercentage from './MemoryPercentage';
import MemoryWorking from './MemoryWorking';
import ReqInfn from './ReqInfn';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/average' element={<Count />} />
          <Route path='/RequestInformation' element={<ReqInfn />} />
          <Route path='/memory' element={<MemoryWorking />} />

          <Route path='/cpuperformance' element={<Cpuperformance />} />
          <Route path='/memoryPercentage' element={<MemoryPercentage />} />
          <Route path='/byteSend' element={<ByteSend />} />
          <Route path='/byteReceive' element={<ByteReceive />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

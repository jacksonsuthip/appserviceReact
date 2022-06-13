import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ByteSend from './appserviceplan/ByteSend';
import ByteReceive from './appserviceplan/BytesReceived';
import Cpuperformance from './appserviceplan/cpuperf';
import MemoryPercentage from './appserviceplan/MemoryPercentage';
import AvgRespTime from './appservice/AvgRespTime';
import Count from './appservice/Count';
import Home from './Home';
import MemoryWorking from './appservice/MemoryWorking';
import ReqInfn from './appservice/ReqInfn';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/average' element={<Count />} />
          <Route path='/RequestInformation' element={<ReqInfn />} />
          <Route path='/memory' element={<MemoryWorking />} />
          <Route path='/avgRespTime' element={<AvgRespTime />} />
          
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

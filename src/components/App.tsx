import { ConnectKitButton } from 'connectkit';
import { Route, Routes } from 'react-router-dom';
import Canvas from './Canvas';
function App() {
  return (
    <div style={{ display: 'inline-block', border: '1px solid #ccc' }}>
      <Routes>
        <Route path="/" element={<Canvas /> } />
      </Routes>
    </div>
  );
}

export default App;

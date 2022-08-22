import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const PushButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  width: 200px;
  border-radius: 20px;
  background-color: ${(props) => (props.isNight ? 'white' : 'black')};
  color: ${(props) => (props.isNight ? 'black' : 'white')};
`;
function App() {
  const [isNight, setIsNight] = useState(true);

  return (
    <div className="App">
      <header className={isNight ? 'App-header' : 'App-header2'}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`GH's space`}</p>
        <PushButton
          onClick={() => {
            setIsNight(!isNight);
          }}
          isNight={isNight}
        >
          {isNight ? '주간모드로 바꾸기' : '야간모드로 바꾸기'}
        </PushButton>
        asdfasdf
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors2 from './components/SelectColors2';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors2 />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
import { createRoot } from 'react-dom/client';
import App from './App';
// import { TrebleApp } from "@threekit-tools/treble"
import './index.css';

const container = document.getElementById('tk-treble-root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

window.onload = function () {
  var divs = document.getElementsByClassName('sc-eXBvqI fnCpK');
  for (var i = 1; i < divs.length; i++) {
    divs[i].id = 'child' + i;
  }
};

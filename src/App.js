import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className='equal'>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;

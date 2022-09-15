import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';
import Greet from './components/Greet';
import Summary from './components/Summary';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  const name = 'Patty';
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;

  return (
    <div className="App">
      <h1>{title}</h1>
      <Greet name="Patty" times={4} />
      <Summary title="Maple Town" folded>
        <p>
          Patty Hope-rabbit, along with her family, arrives in Maple Town, a
          smalltown inhabited by friendly animals.
        </p>
        <p>
          Soon, the Rabbit Family settles in Maple Town as mail carriers and the
          bitter, yet sweet friendship of Patty and Bobby begins to blossom.
        </p>
      </Summary>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <div>{greet(name)}</div>
      </header>
      <form>
        <label htmlFor="favChar">好きなキャラクターは?</label>
        <select id="favChar" defaultValue="fox">
          <option value="rabbit">パティ</option>
          <option value="bear">ボビー</option>
          <option value="fox">ダイアナ</option> {/* selected */}
          <option value="pig">プリプリン</option>
          <option value="squirrel">ジュディ</option>
        </select>
        <label htmlFor="favReason">そのキャラクターのどこが好き?</label>
        <textarea id="favReason" defaultValue="【例】見た目が好き" />
      </form>
    </div>
  );
};

export default App;

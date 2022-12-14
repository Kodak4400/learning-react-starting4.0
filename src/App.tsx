import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import type { Character } from 'components/CharacterList';
import CharacterList from 'components/CharacterList';
import Counter from 'components/Counter';
import Timer from 'components/Timer';
import './App.css';
import Providers from './Providers';
import Greet from './components/Greet';
import ProfileWriter from './components/ProfileWriter';
import RegistrationForm from './components/RegistrationForm';
import Summary from './components/Summary';
import IndexRoutes from './routes';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];
  const name = 'Patty';
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;

  return (
    <div className="App">
      <div>
        <Providers>
          <IndexRoutes />
        </Providers>
      </div>
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
      <div className="container">
        <Heading size="lg" as="h1" my={12}>
          『SLAM DUNK』登場人物
        </Heading>
        <CharacterList school="湘北高校" characters={characters} />
      </div>
      <div>
        <Heading size="lg" as="h1" my={8}>
          カウンター
        </Heading>
        <Counter />
      </div>
      <div>
        <Heading size="lg" as="h1" my={8}>
          {import.meta.env.VITE_APP_TITLE}
        </Heading>
        <Timer />
      </div>
      <div>
        <Heading size="lg" as="h1" my={8}>
          {import.meta.env.VITE_APP_TITLE}
        </Heading>
        <RegistrationForm />
      </div>
      <div>
        <Heading size="lg" as="h1" my={8}>
          {import.meta.env.VITE_APP_TITLE}
        </Heading>
        <ProfileWriter count={200} />
      </div>
    </div>
  );
};

export default App;

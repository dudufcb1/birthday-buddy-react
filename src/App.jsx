import { useState } from 'react';
import data from './data';
import { List } from './List';
const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        {people.length > 0 ? (
          <button
            className="btn-block btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear list
          </button>
        ) : (
          <button
            className="btn btn-block"
            onClick={() => {
              setPeople(data);
            }}
          >
            Refresh
          </button>
        )}

      </section>
      <footer style={{ textAlign: 'center' }}>
        <a href="https://dudufcb.netlify.app/" target="">
          Trabajo realizado por Luis González | Volver Al Portafolio
        </a>
      </footer>
    </main>
   
  );
};
export default App;

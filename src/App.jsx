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

    </main>
          <footer>Creado por   <a href="https://dudufcb.netlify.app/" class="btn btn-block"
            >Luis González - Volver al portfolio</a> </footer>
  );
};
export default App;

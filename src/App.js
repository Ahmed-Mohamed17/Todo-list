import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import ListItems from './components/listItems';
import Title from './components/title';
function App() {

  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [description, setDescription] = useState("");

  const HandleAddItems = function (item) {
    setItems((previtems) => [...previtems, item]);
  };

  function onTaggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function HandleDeletItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <section>
      <div className='container'>
        <Title />
        <Form
          description={description}
          setDescription={setDescription}
          HandleAddItems={HandleAddItems}
        />
        <ListItems
          items={items}
          onTaggleItem={onTaggleItem}
          HandleDeletItem={HandleDeletItem}
        />
      </div>
    </section>
  );
}

export default App;

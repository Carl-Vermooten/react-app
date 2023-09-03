import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "Tokyo", "Paris"]; // Data could come from a DB via an API

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert />
    </div>
  );
}

export default App;

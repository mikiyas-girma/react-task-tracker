import Header  from "./components/Header";

function App() {
  const name = 'mike';
  return (
    <div className="container">
      <Header />
      <h1>Hello from react</h1>
      <h4>this is from {name}</h4>
    </div>
  );
}

export default App;

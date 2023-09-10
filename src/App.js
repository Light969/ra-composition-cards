import "./App.css";
import Card from "./react-component/Card";
function App() {
  return (
    <div>
      <Card
        title={"Card title"}
        text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
      >
        <img
          alt={"Картинка-заглушка"}
          src={"https://oboitut.com/uploads/posts/2016-05/thumbs/_oboitut.com_1462713283.jpg"}
        />
      </Card>
      <Card
        title={"Special title treatment"}
        text={"With supporting text below as a natural lead-in to additional content."}
      />
    </div>
  );
}

export default App;

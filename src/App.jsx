import NavBar from "./components/NavBar";
import Content from "./components/Content";
import GoalCard from "./components/GoalCard";
import Footer from "./components/Footer";
import goals from "./data/testData";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content>
        {goals.map(({ id, goalText, description }) => (
          <GoalCard key={id} goal={goalText} description={description} />
        ))}
      </Content>
      <Footer />
    </div>
  );
}

export default App;

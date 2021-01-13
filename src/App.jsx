import NavBar from "./components/NavBar";
import Content from "./components/Content";
import GoalCard from "./components/GoalCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content>
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
      </Content>
      <Footer />
    </div>
  );
}

export default App;

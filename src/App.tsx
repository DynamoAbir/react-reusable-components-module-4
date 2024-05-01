import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button>Open Modal</Button>
      </div>
    </Container>
  );
}

export default App;

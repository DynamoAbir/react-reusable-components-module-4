import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>This is Modal Header</h2>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a Modal</p>
        </Modal>
      </div>
    </Container>
  );
}

export default App;

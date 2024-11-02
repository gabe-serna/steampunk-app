import NavBar from "@/components/NavBar";
import ChatPopup from "./components/ChatPopup";

function App() {
  return (
    <div
      id="background"
      className="h-screen bg-[url('steampunk-overlay.webp')] bg-cover bg-fixed bg-center"
    >
      <NavBar />
      <main className="h-[120vh] pt-24">
        <div className="mt-40 flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold lg:text-7xl">
            Octavius's Workshop
          </h1>
          <p className="mt-4 px-8 text-center text-2xl text-bronze-400">
            The premier marketplace for mechanical parts
          </p>
        </div>
        <ChatPopup />
      </main>
    </div>
  );
}

export default App;

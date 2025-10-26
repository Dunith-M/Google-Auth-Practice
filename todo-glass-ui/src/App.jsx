import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";

function App() {
  useEffect(() => {
    console.log("Firebase Auth Instance:", auth);
  }, []);

  return (
    <div className="text-white flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Firebase Connected ✅</h1>
    </div>
  );
}

export default App;

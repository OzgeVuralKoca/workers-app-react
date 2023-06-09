import { useEffect, useState } from "react";
import AddWorker from "./components/workers/AddWorker";
import WorkerList from "./components/workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers") ? 
    JSON.parse(localStorage.getItem("workers")) :
    []
  )

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers))
  }, [workers])

  return (
    <div className="flex flex-col flex-wrap content-center">
      <h1 className="text-sky-600 font-semibold text-center mt-10 text-2xl mb-3">
        Maaş Otomasyonu
      </h1>
      <AddWorker setWorkers={setWorkers} />
      {
        workers.length > 0 &&
        <WorkerList
          workers={workers}
          setWorkers={setWorkers}
        />
      }

    </div>
  );
}

export default App;
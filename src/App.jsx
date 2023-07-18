import axios from "axios";
import { useEffect, useState } from "react";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://randomuser.me/api/?results=100")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col  items-center p-5 space-y-10 dark">
      <h1 className="text-5xl">Random Users</h1>
      <UsersList users={users} />
    </div>
  );
}

export default App;

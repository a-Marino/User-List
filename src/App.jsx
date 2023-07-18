import axios from "axios";
import { useEffect, useState } from "react";
import { UsersList } from "./components/UsersList";
import { NextUIProvider, createTheme } from "@nextui-org/react";

function App() {
  const [users, setUsers] = useState([]);

  const darkTheme = createTheme({
    type: "dark",
  });

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
    <NextUIProvider theme={darkTheme}>
      <div className="flex flex-col  items-center p-5 space-y-10">
        <h1 className="text-5xl">Random Users</h1>
        <UsersList users={users} />
      </div>
    </NextUIProvider>
  );
}

export default App;

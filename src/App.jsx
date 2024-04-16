import {Navigate, Route, Routes} from "react-router";
import Menu from "../src/common/Menu";
import AssigmentWrapper from "./common/AssigmentWrapper";
import Character from "./container/Character";
import CreateLesson from "./container/CreateLesson";
import Chat from "./container/Chat";
import Login from "./container/Login";
import Register from "./container/Register";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Navigate to="/learn"/>} />
        <Route path={"/learn"} element={<Menu><>learn</></Menu>} />
        <Route
            path={"/characters"}
            element={
                <Menu>
                    <Character/>
                </Menu>
            }
        />
        <Route
            path={"/add"}
            element={
                <Menu>
                    <CreateLesson/>
                </Menu>
            }
        />
        <Route
            path={"/chat"}
            element={
                <Menu>
                    <Chat/>
                </Menu>
            }
        />
        <Route
            path={"/signin"}
            element={<Login/>}
        />
        <Route
            path={"/signup"}
            element={<Register/>}
        />
    </Routes>
    //   <AssigmentWrapper/>
  );
}

export default App;

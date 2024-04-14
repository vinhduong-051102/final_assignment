import {Navigate, Route, Routes} from "react-router";
import Menu from "../src/common/Menu";
import AssigmentWrapper from "./common/AssigmentWrapper";
import Character from "./container/Character";
import CreateLesson from "./container/CreateLesson";
import Chat from "./container/Chat";

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
    </Routes>
    //   <AssigmentWrapper/>
  );
}

export default App;

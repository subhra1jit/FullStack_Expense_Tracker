import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ExpenseForm />} />
          <Route path="/show" element={<ExpenseList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

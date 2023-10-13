import { useNavigate } from "react-router-dom";

const NavCom = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/show");
  };
  return (
    <div className="bg-white shadow-md py-5 px-10 flex justify-between items-center w-11/12 rounded-sm">
      <h1 className="text-xl text-black font-semibold">Expense Checker</h1>
      <button
        className="w-32 h-10 py-2 px-2 bg-black text-white rounded-md"
        onClick={() => handleClick()}
      >
        Show Expenses
      </button>
    </div>
  );
};

export default NavCom;

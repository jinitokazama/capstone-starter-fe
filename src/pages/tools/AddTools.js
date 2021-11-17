import Header from "../../components/header/Header";
import isAuthenticated from "../../utils/isAuthenticated";
import ToolForm from "./ToolForm";

const AddTools = (props) => {
  return (
    <div className="Register">
      <Header isAuthenticated={isAuthenticated()} />

      <h3 style={{ color: "white" }} className="text-center">
        Add a Tool
      </h3>
      <ToolForm />
    </div>
  );
};

export default AddTools;

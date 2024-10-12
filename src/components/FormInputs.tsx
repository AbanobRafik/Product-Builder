import { FormInputList } from "../data";
import Inputs from "./Ui/Inputs";

const FormInputs = () => {
  const formInputList = FormInputList.map((input) => (
    <div className="flex flex-col mb-3">
      <label
        htmlFor={input.id}
        className="text-gray-700 text-sm mb-1 font-medium"
      >
        {input.label}
      </label>
      <Inputs
        id={input.id}
        name={input.name}
        placeholder={input.placeholder}
        type={input.type}
      />
    </div>
  ));
  return <div className="">{formInputList}</div>;
};

export default FormInputs;

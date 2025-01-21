import { CgCloseO } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";

export default function ({ id, title, completed, handleStatusProp }) {
  return (
    <div className="flex flex-row gap-2 justify-center items-center text-4xl">
      <div key={id}>{title}</div>
      {completed ? (
        <CgCheckO
          className="text-4xl"
          onClick={() => handleStatusProp(id, completed)}
        />
      ) : (
        <CgCloseO
          className="text-4xl"
          onClick={() => handleStatusProp(id, completed)}
        />
      )}
    </div>
  );
}

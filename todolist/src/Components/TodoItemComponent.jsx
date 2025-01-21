import { CgCloseO } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";
import { CgTrash } from "react-icons/cg";

export default function ({
  id,
  title,
  completed,
  handleStatusProp,
  deleteTask,
}) {
  return (
    <div className="flex flex-row justify-between items-center text-center text-4xl p-4 w-96">
      <div key={id}>{title}</div>
      <div className="flex gap-3">
        {completed ? (
          <CgCheckO onClick={() => handleStatusProp(id, completed)} />
        ) : (
          <CgCloseO onClick={() => handleStatusProp(id, completed)} />
        )}
        <button onClick={() => deleteTask(id)}>
          <CgTrash />
        </button>
      </div>
    </div>
  );
}

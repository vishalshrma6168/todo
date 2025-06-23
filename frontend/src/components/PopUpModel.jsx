import React from "react";
import toast from "react-hot-toast";
import todoServices from "../Services/TodoService.jsx";
function PopUpModel({
  title,
  showModel,
  setShowModel,
  setTitle,
  description,
  setdescription,
}) {
  const handleclose = () => {
    setShowModel(false);
  };

  const handleSubmit = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const id = userData && userData.user.id;
      const data = { title, description, id };
      if (!title || !description) {
        return toast.error("please provide title or description");
      }
      const todo = await todoServices.createTodo(data);
      console.log(todo);
      setShowModel(false);
      toast.success("task created sucessfully");
      setTitle("");
      setdescription("");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <>
      {showModel && (
        <div className="flex items-center justify-center border-1 w-60">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Add new task</h5>
                <button className="btn-close" onClick={handleclose}>
                  <span>&times;</span>
                </button>
                <div className="modal-body">
                  <div>
                    <label>title</label>
                    <input
                      type="text"
                      className="bg-gray-300"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="text"> description :</label>
                    <textarea
                      id="text"
                      className="bg-gray-400"
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </div>
                  <div className="modal-footer flex-row">
                    <button
                      type="button"
                      className="bg-red-800 gap-3"
                      onClick={handleclose}
                    >
                      {" "}
                      close
                    </button>

                    <button
                      className=" bg-blue-500"
                      type="button"
                      onClick={handleSubmit}
                    >
                      {" "}
                      create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpModel;

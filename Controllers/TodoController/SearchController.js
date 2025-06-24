import todoModel from "../../Models/TodoModel.js"

// serachtodo controller 
export const searchTodoController = async (req, res) => {
  try {
    const todos = await todoModel.findById(req.params.id);
    if (!todos) {
      return res.status(404).send({
        success: false,
        message: "you have no todo",
      });
    }
    
    res.status(200).send({
      success: true,
      message: "your todo",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in search todo api",
    });
  }
};
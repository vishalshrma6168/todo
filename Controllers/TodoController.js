import todoModel from "../Models/TodoModel.js";
// create todo
export const createTodoController = async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "please provide title and  description",
      });
    }
    // create
    const todo = new todoModel({ title, description, createdBy });
    // save
    const result = await todo.save();
    res.status(201).send({
      success: true,
      message: "your task has been created",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create todo",
    });
  }
};

// get todo

export const getTodoController = async (req, res) => {
  try {
    // get user by id
    const { userId } = req.params;
    // validate
    if (!userId) {
      return res.status(404).send({
        success: false,
        message: "no user found with this id",
      });
    }
    // find task
    const todos = await todoModel.find({ createdBy: userId });
    if (!todos) {
      return res.status(404).send({
        success: true,
        message: "you have no todos",
      });
    }
    res.status(200).send({
      success: true,
      message: "your todos",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create todo",
    });
  }
};




// delete todo
export const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "no todo found with this id",
      });
    }
    // find by id and delete task
    const todo = await todoModel.findByIdAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "no task found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your task has been delete",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create todo",
    });
  }
};

// update todo
export const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please provide todo id",
      });
    }
    const data = req.body;
    // update
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false }
    );
    res.status(200).send({
      success: true,
      message: "your task has been updated",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create todo",
    });
  }
};

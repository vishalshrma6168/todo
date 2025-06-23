const testController = (req, res) => {
  try {
    res.status(200).send("<h1>wellcome to node server </h2>");
  } catch (error) {
    console.error("Error in testapi:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default testController;

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username)
    if (username === "abdulaziz" && password === "admin"){
      console.log("Admin has been logged in")
      return res.status(200).json({
        role: "admin",
        message: "Admin login successful",
      });
    } else {n
      console.log("Wrong username or password entered");
    }
  } catch (error) {
    console.error(error);
  }
};
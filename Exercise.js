const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json"); // path.json --> correct path format is used across different operating systems.

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  let jsonData = JSON.parse(data);

  const newUser = {
    id: 4,
    name: "Sarah Connor",
    age: 28,
    city: "San Francisco",
  };
  jsonData.push(newUser);

  const deleteUserId = 2;
  jsonData = jsonData.filter((user) => user.id !== deleteUserId);

  const modifyUserId = 1;
  const userToModify = jsonData.find((user) => user.id === modifyUserId);
  if (userToModify) {
    userToModify.name = "Sharmi";
    userToModify.age = 21;
    userToModify.city = "Tuticorin";
  }

  const updatedData = JSON.stringify(jsonData, 2);

  fs.writeFile(filePath, updatedData, "utf-8", (err) => {
    if (err) {
      throw err;
    }
    console.log("File has been updated.");
  });
});

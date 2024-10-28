const fs = require("fs");
const path = require("path");

// Function to replace paths in the file content
const replacePaths = (content) => {
  return content.replace(/~\/hooks\/(.+)/g, "./hooks/$1"); // Match any path under hooks
};

const filePath = path.resolve(__dirname, "dist/index.js");
const content = fs.readFileSync(filePath, "utf8");

// Replace the ~ alias with the relative path
const updatedContent = replacePaths(content);

fs.writeFileSync(filePath, updatedContent, "utf8");
console.log("Paths replaced successfully in dist/index.js.");

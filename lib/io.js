const path = require("path");
const glob = require("glob");

// check if the admin page actually saves files in posts as `yyyy-mm-dd-name.md`
const getLastPostDate = () => {
  const fullPath = path.join(__dirname, "..", "posts");

  const files = glob.sync(`${fullPath}/**/*`);

  if (files.length) {
    const latestFilepath = files.sort().pop();
    const postDate = latestFilepath.split("/").pop();

    return new Date(postDate.substring(0, 10)).toISOString();
  }

  return null;
};

getLastPostDate("/posts");

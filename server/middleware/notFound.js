/**
 *@description  Work as middleware for the NotFound Route
 * @returns resposne status and message
 */
const notFound = (req, res) => {
  return res.status(404).send("Route does not exist");
};

module.exports = notFound;

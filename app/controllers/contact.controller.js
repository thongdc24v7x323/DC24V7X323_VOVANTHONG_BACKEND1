exports.create = (req, res) => {
  return res.send({ message: "Create contact" });
};

exports.findAll = (req, res) => {
  return res.send({ message: "Return all contacts" });
};

exports.findOne = (req, res) => {
  return res.send({ message: "Return contact by id" });
};

exports.update = (req, res) => {
  return res.send({ message: "Update contact" });
};

exports.delete = (req, res) => {
  return res.send({ message: "Delete contact" });
};

exports.deleteAll = (req, res) => {
  return res.send({ message: "Delete all contacts" });
};

exports.findAllFavorite = (req, res) => {
  return res.send({ message: "Return favorite contacts" });
};

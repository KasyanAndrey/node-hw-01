const listContacts = require("./listContacts");
const updataContacts = require("./updateContacts");

const updateById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => String(item.id) === String(id));
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, id };
  await updataContacts(contacts);
  return contacts[idx];
};

module.exports = updateById;

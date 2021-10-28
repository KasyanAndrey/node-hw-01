const fs = require("fs/promises");
const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const updataContacts = require("./updateContacts");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);

  await updataContacts(contacts);

  return newContact;
};

module.exports = addContact;

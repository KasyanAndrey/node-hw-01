const contactsOpaerations = require("./contacts-controllers/");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "list":
      return await contactsOpaerations.listContacts();

    case "get":
      const contact = await contactsOpaerations.getContactById(id);
      return contact;

    case "add":
      const newContact = await contactsOpaerations.addContact(data);
      return newContact;

    case "updateById":
      const updateContact = await contactsOpaerations.updateById(id, data);
      return updateContact;

    case "remove":
      const removeContactById = await contactsOpaerations.removeContact(id);
      console.table(removeContactById);
      return removeContactById;

    default:
      throw new Error("Unknown action type!");
  }
};

// ------------------LIST-------------------
// invokeAction({ action: "list" });
// ------------------GET--------------------
// const id = 5;
// invokeAction({ action: "get", id });
// -------------------ADD-------------------
// const data = {
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// };
// invokeAction({ action: "add", data });
// ------------------UPDATE---------------------
// const updateId = "16dcbe52-c1ad-4054-afa4-ffb9ce434e67";
// const updateData = {
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "777-77-77",
// };
// invokeAction({ action: "updateById", data: updateData, id: updateId });
// ------------------REMOVE---------------------
const removeId = "16dcbe52-c1ad-4054-afa4-ffb9ce434e67";
invokeAction({ action: "remove", id: removeId });

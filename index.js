const { Command } = require("commander");
const chalk = require("chalk");

const contactsOperations = require("./contacts-operations/");

const program = new Command();
program
  .requiredOption("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

(async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.log(chalk.green("All list contacts"));
        return console.table(contacts);

      case "get":
        const contact = await contactsOperations.getContactById(id);
        console.log(chalk.green("Contact found"));
        return console.table(contact);

      case "add":
        const newContact = await contactsOperations.addContact(
          name,
          email,
          phone
        );
        console.log(chalk.green("Add new contact"));
        return console.table(newContact);

      case "remove":
        const removeContactById = await contactsOperations.removeContact(id);
        console.log(chalk.green("Contact removed"));
        return console.table(removeContactById);

      default:
        console.warn(chalk.red("Unknown action type!"));
    }
  } catch (error) {
    console.error(chalk.red(error.message));
  }
})(argv);

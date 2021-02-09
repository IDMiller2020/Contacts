let contacts = []

function addContact(event) {
  event.preventDefault()
  let form = event.target
  let contactName = form.contactName.value
  let contactPhone = form.contactPhone.value
  let emergencyContact = form.emergencyContact.checked
  let newId = generateId()
  loadContacts()
  let existingContact = contacts.find(contact => contact.name == contactName)
  if(!existingContact) {
    console.log("a new contact was entered")                                                        // this is a test line
    contacts.push({name: contactName, phone: contactPhone, emergency: emergencyContact, id: newId})
  }
  form.reset()
  saveContacts()
}

function saveContacts() {
  window.localStorage.setItem("contacts", JSON.stringify(contacts))
}


function loadContacts() {
  let contactsData = JSON.parse(window.localStorage.getItem("contacts"))
  if (contactsData) {
    contacts = contactsData
  }
}

/**
 * This function targets the contacts-list on the 
 * DOM and adds a new div element for each of the
 * contacts in the contacts array
 */
function drawContacts() {
 
}

/**
 * This function is called with a contact id
 * and will use the id to find and remove the 
 * contact by their id from the list of contacts
 * *** hints: 
 * *** findIndex: resources/findIndex.jpg
 * *** splice: resources/splice.jpg
 * @param {string} contactId 
 */
function removeContact(contactId) {
}

/**
 * Toggles the visibility of the AddContact Form
 */
function toggleAddContactForm() {

}


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}


loadContacts()
drawContacts()
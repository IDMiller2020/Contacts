let contacts = []

function addContact(event) {
  event.preventDefault()
  let form = event.target
  let contactName = form.contactName.value
  let contactPhone = form.contactPhone.value
  let emergencyContact = form.emergencyContact.checked
  let newId = generateId()
  let existingContact = contacts.find(contact => contacts.name == contactName)
  if(!existingContact) {
    contacts.push({name: contactName, phone: contactPhone, emergency: emergencyContact, id: newId})
  }
  form.reset()
}

/**
 * Converts the contacts array to a JSON string then
 * Saves the string to localstorage at the key contacts 
 */
function saveContacts() {
 
}

/**
 * Attempts to retrieve the contacts string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the contacts array to the retrieved array
 */
function loadContacts() {
  
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
let contacts = []
loadContacts()

function addContact(event) {
  event.preventDefault()
  let form = event.target
  let contact = {
    name: form.contactName.value,
    phone: form.contactPhone.value,
    emergencyContact: form.emergencyContact.checked,
    id: generateId()
  }
  let existingContact = contacts.find(contact => contact.name == form.contactName.value)
  if(!existingContact) {
    contacts.push(contact)
  }
  saveContacts()
  form.reset()
}

function saveContacts() {
  window.localStorage.setItem("contacts", JSON.stringify(contacts))
  drawContacts()
}

function loadContacts() {
  let contactsData = JSON.parse(window.localStorage.getItem("contacts"))
  if (contactsData) {
    contacts = contactsData
  }
}

function drawContacts() {
  let contactListElement = document.getElementById("contact-list")
  let contactsTemplate = ""
  contacts.forEach(contact => {
    contactsTemplate += `
    <div class="card mt-1 mb-1 ${contact.emergencyContact ? "emergency-contact" : ""}">
      <h3 class="mt-1 mb-1">${contact.name}</h3>
      <div class="d-flex space-between">
        <p>
          <i class="fa fa-fw fa-phone"></i>
          <span>${contact.phone}</span>
        </p>

        <i class="action fa fa-trash text-danger" onclick=removeContact("${contact.id}")></i>

      </div>

    </div>
    `
  })
  contactListElement.innerHTML = contactsTemplate
}

function removeContact(contactId) {
  let index = contacts.findIndex(contact => contact.id === contactId)
  contacts.splice(index, 1)
  saveContacts()
  drawContacts()
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
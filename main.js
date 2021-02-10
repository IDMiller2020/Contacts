let contacts = []
loadContacts()

function addContact(event) {
  event.preventDefault()
  let form = event.target
  let contactName = form.contactName.value
  let contactPhone = form.contactPhone.value
  let emergencyContact = form.emergencyContact.checked
  let newId = generateId()
  let existingContact = contacts.find(contact => contact.name == contactName)
  if(!existingContact) {
    contacts.push({name: contactName, phone: contactPhone, emergency: emergencyContact, id: newId})
  }
  form.reset()
  saveContacts()
  drawContacts()
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

function drawContacts() {
  let template = ""
  contacts.forEach(contact => {
    if(contact.emergency == true){
      template += `
      <div class="card mt-1 mb-1 emergency-contact">
      <h3 class="mt-1 mb-1">${contact.name}</h3>
      <div class="d-flex space-between">
        <p>
          <i class="fa fa-fw fa-phone"></i>
          <span>${contact.phone}</span>
        </p>
        <i class="action fa fa-trash text-danger"></i>
      </div>
    </div>
    `
    }
    else{
      template += `
      <div class="card mt-1 mb-1">
      <h3 class="mt-1 mb-1">${contact.name}</h3>
      <div class="d-flex space-between">
        <p>
          <i class="fa fa-fw fa-phone"></i>
          <span>${contact.phone}</span>
        </p>
        <i class="action fa fa-trash text-danger"></i>
      </div>
    </div>
    `
    }
    

  
  })

  document.getElementById("contacts").innerHTML = template
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
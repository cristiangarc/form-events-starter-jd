const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    // prevent the page from reloading
    event.preventDefault();

    // TODO: generate a contact
    //       build a template for an li and input values from the names, events.target.inputname.value
    // destructure my target structures
    const { name, phone, email, notes  } = event.target;
    generateContact(name.value, phone.value, email.value, notes.value);
});
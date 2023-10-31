function generateContact(name, telephone, email, notes) {
  // create a new li
    const li = contactTemplate(name, telephone, email, notes);

  // this will add a new li to the ul element
  //Grab the ul list from the DOM
  const ul = document.querySelector("ul");
  // append the newly created li
  ul.append(li);
}

function contactTemplate(name, telephone, email, notes) {
  const li = document.createElement("li");
  li.classList.add("single-contact");

  if (name && telephone && email) {
    li.innerHTML = `<h3>🌏</h3><p><strong>Name</strong>: ${name}</p>
    <p><strong>Tel:</strong></strong> ${telephone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;

    li.append(removeButton);
  }

  return li;
}

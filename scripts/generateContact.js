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

  // create a button, add text to the button, and add an event listener to the button to remove the li
  // append the button to the li
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Contact";
  removeButton.addEventListener("click", (event) => {
    // find the closest li to this button and remove it
    event.target.closest(".single-contact").remove();
    count--;
    addCount(count);
  })

  if (name && telephone && email) {
    li.innerHTML = `<h3>🌏</h3><p><strong>Name</strong>: ${name}</p>
    <p><strong>Tel:</strong></strong> ${telephone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;

    li.append(removeButton);
  }

  return li;
}


// remove the hard coded li

// grab all of the li elements in the HTML
// loop through th elements
// add an event listener to each element
const listItems = document.querySelectorAll("li button");
for (const button of listItems) {
  button.addEventListener("click", (event) => {
    event.target.closest(".single-contact").remove();
    count--;
    addCount(count);
  })
}


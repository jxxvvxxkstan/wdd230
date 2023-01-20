document.querySelector('#addButton').addEventListener('click', addButton);

function addButton() {

  // text box access
    const userInput = document.getElementById('#favchap');
    let inputValue = document.querySelector('#favchap').value;
    document.querySelector('#favchap').value= "";


  if (inputValue != "") {
    // ul access
    const list = document.querySelector('ul');

    // li and button
    const listItem = document.createElement('li');

    // updates list
    list.appendChild(listItem);

    // loads input to list
    listItem.textContent = inputValue;

    // delete button
    const dltButton = document.createElement('button');
    dltButton.textContent = "❌";

    listItem.appendChild(dltButton);

    dltButton.addEventListener('click', () => {
      list.removeChild(listItem);
    });
    
    inputValue.focus();
  }  
}
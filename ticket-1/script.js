// Page is unstyled - the "Add" button should be green.
// - Page is not interactive - clicking "Add" does nothing, even though JavaScript handles interactivity.

// Your task is to investigate and fix the bugs so:

// - Page styling works properly.
// - Page becomes fully interactive (adding items to list works).

// Get elements from the DOM
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemBtn");
const shoppingList = document.getElementById("shoppingList");

// Add an item to the shopping list
addItemButton.addEventListener("click", () => {
  const itemName = itemInput.value.trim();

  if (itemName !== "") {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    li.append(itemName, deleteButton);

    shoppingList.append(li);
    itemInput.value = "";

    // Add event listener to delete button
    deleteButton.addEventListener("click", () => li.remove());
  }
  console.log(shoppingList);
});

const selectEl = document.getElementById("mySelect");

const extraBox = document.getElementById("extraBox");// checkbox container

selectEl.addEventListener("change", () => // Event handler
{
    if (selectEl.value === "show") // If the chosen option is "show", display checkbox
    {
        extraBox.classList.remove("hidden");
    } 
    else 
    {
        extraBox.classList.add("hidden");// Otherwise hide it
    }

});

const textInput = document.getElementById("textInput");// TEXT INPUT

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("Enter key was pressed!");
  }
});
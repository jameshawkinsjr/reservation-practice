Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

let getRoundedTimeString = (minutes) => {
    let milliseconds = 1000 * 60 * minutes; // Nearest 30 minutes
    return new Date(Math.round(new Date().getTime() / milliseconds) * milliseconds)
        .toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
  };
// Set default values for inputs
document.getElementById('dateInput').value = new Date().toDateInputValue();
document.getElementById("timeInput").defaultValue = getRoundedTimeString(30);

let addDropdown = () => {
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.remove("hidden");
}

let signupForm = () => {
    let dropdown = document.getElementById("signup-form");
    dropdown.classList.remove("hidden");
}


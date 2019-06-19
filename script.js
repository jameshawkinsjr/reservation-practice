Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

let getRoundedTimeString = () => {
    let milliseconds = 1000 * 60 * 30; // Nearest 30 minutes
    return new Date(Math.round(new Date().getTime() / milliseconds) * milliseconds)
        .toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
  };

// Set default values for inputs
document.getElementById('dateInput').value = new Date().toDateInputValue();
document.getElementById("timeInput").defaultValue = getRoundedTimeString();
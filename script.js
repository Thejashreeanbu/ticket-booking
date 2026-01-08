function bookTicket() {
    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;
    let tickets = document.getElementById("tickets").value;
    let result = document.getElementById("result");

    if (name === "" || destination === "" || tickets === "") {
        result.innerHTML = "Please fill all details!";
        return;
    }

    result.innerHTML = `
        <h4>Ticket Booked Successfully ✅</h4>
        Name: ${name} <br>
        Destination: ${destination} <br>
        Tickets: ${tickets}
    `;
}
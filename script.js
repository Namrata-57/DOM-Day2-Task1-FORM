document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("form");
    const dataTable = document.getElementById("dataTable");

    dataForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(dataForm);

        // Validating at least 2 food items are selected
        const selectedFood = formData.getAll("food");
        if (selectedFood.length < 2) {
            alert("Please select at least 2 food items.");
            return;
        }

        const newRow = dataTable.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = formData.get("first-name");
        cell2.innerHTML = formData.get("last-name");
        cell3.innerHTML = formData.get("address");
        cell4.innerHTML = formData.get("pincode");
        cell5.innerHTML = formData.get("gender");
        cell6.innerHTML = selectedFood.join(", ");
        cell7.innerHTML = formData.get("country");
        cell8.innerHTML = formData.get("state");
        console.log(formData.get("first-name"), formData.get("last-name"))

        dataForm.reset();
    });
});
/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */
function showResult(output) {
    const resultDiv = document.getElementById("result");
    const errorMsg = document.getElementById("errorMsg");
    const historyUl = document.getElementById("history");

    if (output.status === "error") {
        errorMsg.textContent = output.message
        resultDiv.textContent = ""
    } else {
        errorMsg.textContent = ""
        resultDiv.textContent = `${output.data.result}`

        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent = `${output.data.number}: ${output.data.result}`
        historyUl.appendChild(li)
    }
}
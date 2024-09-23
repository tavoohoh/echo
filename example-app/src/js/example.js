import { GsCapacitorKustomer } from 'gs-capacitor-kustomer';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    GsCapacitorKustomer.echo({ value: inputValue })
}

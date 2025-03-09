console.log("script running");

function calculate(event){
    event.preventDefault();

    let userInput = document.getElementById('user_input').value;
    console.log(userInput);
    
    document.getElementById('output').innerHTML='';

    let i = 1;

    let table = new Array();

    while(i <= 10){
        table[i-1] = userInput * i;
        console.log(table[i-1]);
        document.getElementById('output').innerHTML += `
        <p>${userInput} x  ${i} = ${table[i-1]}</p>
        `;
        i++;
    }

    alert("Table Calculated click ok to see");
}
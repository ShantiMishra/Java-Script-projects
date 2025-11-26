const Celsius = document.getElementById("celsius");
const Fahrenheit = document.getElementById("fahrenheit");
const Kelvin = document.getElementById("kelvin");

function computeTemp(event){
    const currentValue = +event.target.value

    switch(event.target.id){
        case "celsius" :
            Kelvin.value = (currentValue + 273.32).toFixed(2);
            Fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2); 
            break;
        case "fahrenheit" :
            Celsius.value = ((currentValue - 32)/1.8 ).toFixed(2);
            Kelvin.value = ((currentValue - 32)/1.8 + 273.32).toFixed(2); 
            break;
        case "kelvin" :
            Celsius.value = (currentValue - 273.32).toFixed(2);
            Fahrenheit.value = ((currentValue -273.32)* 1.8 + 32).toFixed(2); 
            break;
        default:
            break;    
    }
}
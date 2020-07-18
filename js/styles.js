
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function myFunction() {
    event.preventDefault();
    var gender = document.getElementById('genders').value;
    var date = document.getElementById('date').value;
    date = new Date(date);
    if (gender === 'male') {
        alert(" For Him Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    }
    else if (gender === 'female') {
        alert(" For Her Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    }
    else {
        alert( " For Her Born On " + " Undifined Date " + ',' + " Your Akan Name Is "  + " Undifined");
    }
}
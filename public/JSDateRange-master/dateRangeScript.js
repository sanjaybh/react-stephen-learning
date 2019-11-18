// adding the event listener to the DOM object i.e, document 
document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    const datepicker1 = document.querySelector('.datepicker1');
    const datepicker2 = document.querySelector('.datepicker2');
    const selectTag = document.getElementById('selectTag');


    // creating global variable to store options
    window.dateOptions = [];
    const displayDate = (e) => {
        e.preventDefault;

        // checking value is selected or not. if selected then proceed with if otherwise alert the error
        if (datepicker1.value && datepicker2.value) {

            // checking both date value should not be same
            if (datepicker1.value !== datepicker2.value) {

                // checking left date should be less than right date
                if (datepicker1.value < datepicker2.value) {
                    const valueToBeInserted = `${dateFormat(datepicker1.value)} - ${dateFormat(datepicker2.value)}`;
                    const isUnique = dateOptions.indexOf(valueToBeInserted) === -1;

                    // checking value is unique or not. If unique then proceed with if otherwise alert the message of already selected
                    if (isUnique) {
                        dateOptions.push(valueToBeInserted);
                        var opt = document.createElement('option');
                        opt.value = dateOptions.length;
                        opt.innerHTML = valueToBeInserted;
                        opt.defaultSelected = true;
                        selectTag.add(opt);
                    } else {
                        alert("OOPS!!! Range already selected. Try new one.");
                        resetDate();
                    }
                } else {
                    alert("OOPS!!! please select the correct dates.")
                    resetDate();
                }
            } else {
                alert("OOPS!!! dates are same. please select the different date for range.")
                resetDate();
            }
        } else {
            alert("Please select date rage.");
            resetDate();
        }
    }

    datepicker2.addEventListener("change", displayDate);

    function resetDate() {
        datepicker1.value = "";
        datepicker2.value = "";
    }
});

// common Utilities Function
function dateFormat(dateVal) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var now = new Date(dateVal);
    return now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
}
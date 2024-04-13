document.getElementById('income-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    var grossIncome = parseFloat(document.getElementById('GrossIncome').value);
    var extraIncome = parseFloat(document.getElementById('ExtraIncome').value);
    var age = parseInt(document.getElementById('age').value);
    var deductions = parseFloat(document.getElementById('Deductions').value);
    
    
    var totalIncome = grossIncome + extraIncome - deductions;
    
    
    var tax = 0;
    if (totalIncome > 800000) {
        if (age < 40) {
            tax = 0.3 * (totalIncome - 800000);
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * (totalIncome - 800000);
        } else {
            tax = 0.1 * (totalIncome - 800000);
        }
    }
    
    
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var taxAmountDisplay = document.getElementById('taxAmount');
    
    taxAmountDisplay.innerHTML = "Tax to be paid: " + tax.toFixed(2) + " Lakhs";
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
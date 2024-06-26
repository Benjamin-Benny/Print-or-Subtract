// Function to calculate remainder Mk where Mk < N
const calculateRemainder = (M, N) => {
    if (M < N) {
        return M;
    } else {
        let currentM = M;
        while (currentM >= N) {
            currentM -= N;
        }
        return currentM;
    }
};

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get values from input fields
    const M = parseInt(document.getElementById('numberM').value);
    const N = parseInt(document.getElementById('numberN').value);
    
    // Calculate remainder
    const remainder = calculateRemainder(M, N);
    
    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `The output is: ${remainder}`;
};

// Add submit event listener to form
const remainderForm = document.getElementById('remainderForm');
remainderForm.addEventListener('submit', handleSubmit);

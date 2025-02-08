let firstChk = document.getElementById("first-checked");
let secondChk = document.getElementById("second-checked");
let firstCheckedImg = document.getElementById("firstChecked");
let secondCheckedImg = document.getElementById("secondChecked");
let generalEnquiry = document.querySelector(".general-enquiry");
let supportReq = document.querySelector(".support-request");
let firstName = document.getElementById('firstName');
let secondName = document.getElementById('lastName');
let emailId = document.getElementById('email');
let message = document.getElementById('messageField');
let submitBtn = document.querySelector('[type="submit"]');
let successMsg = document.querySelector('.alert-message')
let errorFields = document.querySelectorAll('.error-message');

console.log("checking error message", errorFields)
console.log("fname", firstName)
console.log("lname", secondName)
console.log("email", emailId)
console.log("message", message)
console.log("button", submitBtn)

firstChk.addEventListener("change", function () {
    if (firstChk.checked) {
        generalEnquiry.style.backgroundColor = "#b6e6dd";
        supportReq.style.backgroundColor = "#fff";

        firstCheckedImg.style.display = "block";
        firstChk.style.display = "none";
        secondCheckedImg.style.display = "none";
        secondChk.style.display = "inline-block";
        if (secondChk.checked == true) {
            secondChk.checked = false;
        }
    }
});

secondChk.addEventListener("change", function () {
    if (secondChk.checked) {
        supportReq.style.backgroundColor = "#b6e6dd";
        generalEnquiry.style.backgroundColor = "#fff";

        secondCheckedImg.style.display = "block";
        secondChk.style.display = "none";
        firstCheckedImg.style.display = "none";
        firstChk.style.display = "inline-block";
        if (firstChk.checked == true) {
            firstChk.checked = false;
        }
    }
});

// submitBtn.addEventListener('click', () => {
//     if (firstName == '' && secondName == '' && emailId == '' && message == '') {
        
//         // for(let i=0; i<errorFields.length; i++){
//         //     errorFields[0].innerText = "this field is required";
//         //     errorFields[1].innerText = "this field is required";
//         //     errorFields[2].innerText = "please enter a valid email address";
//         // }
//         errorFields.forEach((item) => {
//             alert(item)
//         })
//     }
//     else{
//         setTimeout(() => {
//             successMsg.style.display = 'block';
//         }, 500);
//         setTimeout(() => {
//             successMsg.style.display = 'none';
//         }, 2500);
//     }
// })

submitBtn.addEventListener('click', () => {
    let isError = false;

    if (firstName.value.trim() === '') {
        errorFields[0].innerText = "This field is required";
        isError = true;
    } else {
        errorFields[0].innerText = "";
    }

    if (secondName.value.trim() === '') {
        errorFields[1].innerText = "This field is required";
        isError = true;
    } else {
        errorFields[1].innerText = "";
    }

    if (emailId.value.trim() === '') {
        errorFields[2].innerText = "Please enter a valid email address";
        isError = true;
    } else {
        errorFields[2].innerText = "";
    }

    if (!firstChk.checked && !secondChk.checked) {
        errorFields[3].innerText = "This field is required";
        isError = true;
    } else {
        errorFields[3].innerText = "";
    }

    if (message.value.trim() === '') {
        errorFields[4].innerText = " message is required";
        isError = true;
    } else {
        errorFields[4].innerText = "";
    }

    if (isError) {
        return;
    }

    setTimeout(() => {
        successMsg.style.display = 'block';
    }, 500);

    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 2500);
});



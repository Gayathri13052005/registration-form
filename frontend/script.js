// // async function registerUser() {
// //     const form = document.getElementById('registration-form');
// //     const formData = new FormData(form);

// //     const data = {
// //         email: formData.get('email'),
// //         password: formData.get('password'),
// //         studentName: formData.get('studentName'),
// //         age: formData.get('age'),
// //         fatherName: formData.get('fatherName'),
// //         motherName: formData.get('motherName'),
// //         gender: formData.get('gender'),
// //         department: formData.get('department'),
// //         phoneNumber: formData.get('phoneNumber'),
// //         state: formData.get('state'),
// //         city: formData.get('city'),
// //         pinCode: formData.get('pinCode'),
// //     };

// //     try {
// //         const response = await fetch('http://localhost:5000/api/user-register', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(data),
// //         });

// //         const result = await response.json();
// //         if (response.status === 201) {
// //             alert("Registration successful!");
// //             form.reset();
// //         } else {
// //             alert("Error: " + (result.msg || 'Unknown error occurred.'));
// //         }
// //     } catch (error) {
// //         alert('Something went wrong. Please try again later!');
// //         console.error(error);
// //     }
// // }
// console.log("Script Loaded");

// async function registerUser() {
//     const form = document.getElementById('registration-form'); // Make sure your form has the ID "registration-form"
//     const formData = new FormData(form);

//     const data = {
//         email: formData.get('email'),
//         password: formData.get('password'),
//         studentName: formData.get('studentName'),
//         age: formData.get('age'),
//         fatherName: formData.get('fatherName'),
//         motherName: formData.get('motherName'),
//         gender: formData.get('gender'),
//         department: formData.get('department'),
//         phoneNumber: formData.get('phoneNumber'),
//         state: formData.get('state'),
//         city: formData.get('city'),
//         pinCode: formData.get('pinCode'),
//     };

//     try {
//         const response = await fetch('http://localhost:5000/api/user-register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         if (response.status === 201) {
//             alert("Registration successful!");
//             form.reset(); // clear form after successful registration
//         } else {
//             alert("Error: " + (result.msg || 'Unknown error occurred.'));
//         }
//     } catch (error) {
//         alert('Something went wrong. Please try again later!');
//         console.error(error);
//     }
// }

async function registerUser() {
    const form = document.getElementById('registration-form');  // Get the form element
    const formData = new FormData(form);  // Collect data from the form

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        studentName: formData.get('studentName'),
        age: formData.get('age'),
        fatherName: formData.get('fatherName'),
        motherName: formData.get('motherName'),
        gender: formData.get('gender'),
        department: formData.get('department'),
        phoneNumber: formData.get('phoneNumber'),
        state: formData.get('state'),
        city: formData.get('city'),
        pinCode: formData.get('pinCode'),
    };

    try {
        const response = await fetch('http://localhost:5000/api/user-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // Send data as JSON
        });

        const result = await response.json();  // Parse the response
        if (response.status === 201) {
            alert("Registration successful!");  // Success alert
            form.reset();  // Clear the form after successful registration
        } else {
            alert("Error: " + (result.msg || 'Unknown error occurred.'));
        }
    } catch (error) {
        alert('Something went wrong. Please try again later!');
        console.error(error);
    }
}

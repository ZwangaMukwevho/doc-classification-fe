import { getAuthCodeFromStorage } from "@/logic/authenticationUtils";
import { generateUniqueId } from "@/logic/firebaseUtils";
import axios from "axios";

// async function createUserData( categories ) {

//     const gmailCode = getAuthCodeFromStorage('gmail');
//     const gdriveCode = getAuthCodeFromStorage('gdrive');
//     const userId = generateUniqueId();

//     // Construct the request body
//     const requestBody = JSON.stringify({
//         userId,
//         categories,
//         gmailCode,
//         gdriveCode
//     });

//     // Construct the fetch options
//     const requestOptions = {
//         method: 'POST', // Specify the HTTP method
//         headers: {
//             'Content-Type': 'application/json' // Specify the content type
//         },
//         body: requestBody // Set the request body
//     };

//     try {
//         // Send the request to the endpoint
//         const response = await fetch('http://localhost:8080/user/create', requestOptions);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // Parse the JSON response
//         const data = await response.json();
//         return data; // Return the parsed response data
//     } catch (error) {
//         console.error('Error:', error);
//         throw error; // Rethrow the error to handle it outside
//     }
// }

async function createUserData( categories ) {
    // const url = 'https://doc-classification.co.za/classification/user/create';
    const url = 'http://localhost:8080/user/create';
    const gmailCode = getAuthCodeFromStorage('gmail');
    const gdriveCode = getAuthCodeFromStorage('gdrive');
    const userid = generateUniqueId();

    // Construct the request body
    const requestBody = {
        userid,
        categories,
        gmailCode,
        gdriveCode
    };

    try {
        // Send POST request to the endpoint
        const response = await axios.post(url, requestBody);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to handle it outside
    }
}

export { createUserData };

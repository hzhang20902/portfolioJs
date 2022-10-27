// import React, { useState } from "react";
// import styled from "styled-components";


// const TopSectionContainer = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100vh;
//     bottom: 0;
//     left: 0;
//     display: flex;
//     flex-direction: column;
//     z-index: 99;
//     object-fit: cover;
//     padding-top: 3.5em;
    
// `;

// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };


//   return (
//     <TopSectionContainer>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" required />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" required />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" required />
//       </div>
//       <button type="submit">{status}</button>
//     </form>
//     </TopSectionContainer>
//   );
// };

// export default ContactForm;
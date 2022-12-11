// // import './Person.css';
// import { useState } from "react";
// function Person() {
//   const [Person, setPersonInfo] = useState({
//     name: "Jhon",
//     age: 27,
//     enemys: ["Skynet", "T-800", "T-1000", "T-x"],
//     father: "unknown",
//   });
//   const updateFather = () => {
//     setPersonInfo((previousState) => {
//       return {
//         ...previousState,
//         father: "Kyle Reese",
//       };
//     });
//   };
//   return (
//     <div>
//       <h1>Character info</h1>
//       <h2>Name: {Person.name}</h2>
//       <h2>Age:{Person.age}</h2>
//       <h2>Enemys:{Person.enemys}</h2>
//       <h2>Father:{Person.father}</h2>
//       <button type="button" onClick={updateFather}>
//         Update
//       </button>
//     </div>
//   );
// }

// export default Person;

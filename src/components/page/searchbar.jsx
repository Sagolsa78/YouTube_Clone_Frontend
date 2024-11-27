// import { response } from "express";
// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { IoMic } from "react-icons/io5";



// function SearchBar(){
// // export const SearchBar =({setResults})=>{

// //     const [input,setinput]=useState("");

// //     const fetchData = (value) => {
// //         fetch("https://jsonplaceholder.typicode.com/users")
// //           .then((response) => response.json())
// //           .then((json) => {
// //             const results = json.filter((user) => {
// //               return (
// //                 value &&
// //                 user &&
// //                 user.name &&
// //                 user.name.toLowerCase().includes(value)
// //               );
// //             });
// //             setResults(results);
// //           });
// //       };
    

// //     const handleChange =(value)=>{
// //         setinput(value);
// //         fetchData(value);
// //     }


//     return (
//         <div className="flex-grow flex justify-center mx-auto">

//         <div className="flex w-[35%] item-center ">

//           <div className="w-[100%] px-3 py-2 border rounded-l-full">
//             <input type="text" 
//             placeholder="Search" 
//             className="outline-none" 
//             value={input}
//             onChange={(e)=>handleChange(e.target.value)}
            
//             />
//           </div>
//           <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
//             <CiSearch size={"24px"} />
//           </button>



//           <IoMic size={"42px"}
//             className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200  duration-200" />
//         </div>
//       </div>
//     )
// }

// export default SearchBar;



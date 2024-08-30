// import React, { useState } from "react";
// import { doc, QuerySnapshot, getDocs } from "firebase/firestore";

// const tableHeaders = [
//   "First Name",
//   "Email",
//   "Project",
//   "Role",
//   "Github",
//   "Actions",
// ];
// const AdminUserTable = () => {
//   const [userList, setUserList] = useState([]);

//   const clearRenderUsers = () => {
//     setUserList([]);
//   };

//   const handleDocCollection = async (event) => {
//     event?.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:3002/auth/getUserCollection",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ document }),
//         },
//       );
//       const data = await response.json();
//       if (!response.ok) {
//         const errorMessage =
//           data.error === "Data retrieved successfully"
//             ? "Data retrieve failed."
//             : data.error || "An unknown error occurred.";
//         throw new Error(errorMessage);
//       }

//       clearRenderUsers();

//       var userData = JSON.parse(JSON.stringify(data.docs));
//       console.log(userData);
//       setUserList(userData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePromoteUser = async (uid, role) => {
//     console.log("shfbda")
//     // const uid = userId;
//     // const role = "User";
//     try {
//       const response = await fetch("http://localhost:3002/auth/promoteUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ uid, role }),
//       });
//       console.log(response.body)
//       const data = await response.json();
//       handleDocCollection()
//       //     if (!response.ok) {
//       //         const errorMessage = data.error === "Email already exists"
//       //             ? "An account with this email already exists. Please use a different email or log in."
//       //             : data.error || 'An unknown error occurred during sign up.';
//       //         throw new Error(errorMessage);
//       //     }
//     } catch (error) {
//       this.displayToast(error.message);
//     }
//   };
//   return (
//     <div
//       className="login-centered-container"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: "100%",
//       }}
//     >
//       <div>
//         <label>View all user accounts here: </label>
//         <span id="userCount"></span>
//         <div>
//           <button className="fb-btn" onClick={handleDocCollection}>
//             View
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           width: "80%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             border: 2,
//             borderColor: "2px solid red",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               backgroundColor: "white",
//             }}
//           >
//             {tableHeaders.map((header) => (
//               <div
//                 style={{
//                   flex: header === "Email" || header === "Github" ? "2" : 1,
//                   padding: "10px",
//                 }}
//               >
//                 {header}
//               </div>
//             ))}
//           </div>

//           <div>
//             {userList.map((user) => (
//               <div
//                 style={{
//                   display: "flex",
//                   borderBottom: "2px solid #000000"
//                 }}
//               >
//                 <div
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                   }}
//                 >
//                   {user?.firstName}
//                 </div>
//                 <div
//                   style={{
//                     flex: "2",
//                     padding: "10px",
//                   }}
//                 >
//                   {user?.email}
//                 </div>
//                 <div
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                   }}
//                 >
//                   {user?.project}
//                 </div>
//                 <div
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                   }}
//                 >
//                   {user?.role}
//                 </div>
//                 <div
//                   style={{
//                     flex: "2",
//                     padding: "10px",
//                   }}
//                 >
//                   {user?.github}
//                 </div>
//                 <div
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                   }}
//                 >
//                   <button onClick={() => handlePromoteUser(user.uid, "Admin")}>Promote</button>
//                   <button onClick={() => handlePromoteUser(user.uid, "User" )}>Demote</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminUserTable;


import React, { useState, useEffect } from "react";
import './AdminUserTable.css';

const tableHeaders = [
  "First Name",
  "Email",
  "Project",
  "Role",
  "Github",
  "Actions",
];

const AdminUserTable = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/auth/getUserCollection",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ document }),
          },
        );
        const data = await response.json();
        if (!response.ok) {
          const errorMessage =
            data.error === "Data retrieved successfully"
              ? "Data retrieve failed."
              : data.error || "An unknown error occurred.";
          throw new Error(errorMessage);
        }

        const userData = JSON.parse(JSON.stringify(data.docs));
        console.log(userData);
        setUserList(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  const handlePromoteUser = async (uid, role) => {
    try {
      const response = await fetch("http://localhost:3002/auth/promoteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, role }),
      });
      const data = await response.json();
      // Update the user list after promoting/demoting
      setUserList(prevState => 
        prevState.map(user => 
          user.uid === uid ? { ...user, role } : user
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="table-container">
        <h5 className="user-heading">User Details</h5>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th className="user-table-header" key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.uid}>
                <td>{user?.firstName}</td>
                <td>{user?.email}</td>
                <td>{user?.project}</td>
                <td>{user?.role}</td>
                <td>{user?.github}</td>
                <td className="actions">
                  <button className="action-button promote" onClick={() => handlePromoteUser(user.uid, "Admin")}>Promote</button>
                  <button className="action-button demote" onClick={() => handlePromoteUser(user.uid, "User" )}>Demote</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserTable;




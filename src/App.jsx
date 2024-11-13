
   import student from "./StuData";
const ans=student.map((key)=>{
 return(
    <>
       <tr>
     <td>{key.rollno}</td>
     <td>{key.name}</td>
     <td>{key.city}</td>
     <td>{key.fees}</td>
       </tr>
    
    </>
 )
})
  const App=()=>{
return(
<>

  <table border="3">
     <tr>
           <th>Rollno</th>
           <th>Name</th>
           <th>City</th>
           <th>Fees</th>
     </tr>
         {ans}

  </table>
</>
)
  }
export default App; 


















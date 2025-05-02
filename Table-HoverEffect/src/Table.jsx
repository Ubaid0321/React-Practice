import React from "react";

const Table1 = () => {
  return (
    <>
      <h1>Hoverable Table</h1>
      <hr />

      <table>
        <tr id="header">
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Country</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>Ubaid </td>
          <td>Software Engr</td>
          <td>21 </td>
          <td>Pak </td>
          <td>Male </td>
        </tr>
        <tr>
          <td>Fahad Mustafa </td>
          <td>Ai Content creator </td>
          <td>28 </td>
          <td>Pak </td>
          <td>Male </td>
        </tr>
        <tr>
          <td>Uzair Malik </td>
          <td>Project Manager</td>
          <td>26 </td>
          <td>USA </td>
          <td>Male </td>
        </tr>
        <tr>
          <td>Mr karim </td>
          <td>Graphir Designer </td>
          <td>21 </td>
          <td>KSA </td>
          <td>Male </td>
        </tr>
        <tr>
          <td>Shradha Khapra </td>
          <td>Micro Soft engr </td>
          <td>27 </td>
          <td>Ind </td>
          <td>Female </td>
        </tr>
        <tr>
          <td>Baber </td>
          <td>Full Stack developer </td>
          <td>24 </td>
          <td>Pak </td>
          <td>Male </td>
        </tr>
      </table>
    </>
  );
};

export default Table1;

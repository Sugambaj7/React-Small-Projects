import React from "react";

const ResultTableComponent = () => {
  return (
    <>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="table-row">
            <td>Sugam</td>
            <td>1</td>
            <td>100</td>
            <td>First</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ResultTableComponent;

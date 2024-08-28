import React from "react";
import JsonData from '../public/records.json';
import Data from "./List";

function JsonDataDisplay() {
    const DisplayData = JsonData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.fullName}</td>
                <td>{info.ticketNumber}</td>
                <td>{info.ticketTopic}</td>
                <td>{info.ratingGrade}</td>
                <td>{info.examGrade}</td>
                <td>{info.finalGrade}</td>
                <td>{info.status}</td>
                <td>{info.details}</td>
            </tr>
        )
    }
    )

    return (
        <div>
            <table border="10">
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>Full Name</th>
                        <th>Ticket Number</th>
                        <th>Ticket Topic</th>
                        <th>Rating Grade</th>
                        <th>Exam Grade</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default JsonDataDisplay;

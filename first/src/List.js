import React, {useState, useEffect} from 'react';

const Data=()=> {
    const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('records.json')
    .then(response => response.json())
    .then(data => setStudentData(data));
  }, []);

    function AddStudent(){
        setStudentData(studentData.id+1)
    }

    return (
        <div>
            <ul>
                {studentData.map((student)=> (
                    <li key={student.id}> {student.name} - Grade: {student.finalGrade}</li>
                ))}
            </ul>
            <button onClick={AddStudent}>Add Student</button>
        </div>
    )
}

export default Data;
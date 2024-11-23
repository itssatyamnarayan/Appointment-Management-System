import Input from "./Input.jsx";
import List from "./list.jsx";
import { useRef, useState } from "react";

export default function Container() {
  const nameRef = useRef();
  const dateRef = useRef();
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);

  function addAppointment() {
    if (nameRef.current.value != "" && dateRef.current.value != "") {
      setData((prevData) => [
        ...prevData,
        {
          id: id,
          name: nameRef.current.value,
          date: dateRef.current.value,
        },
      ]);
      setId((prevId) => prevId + 1);
    } else {
      alert("Please enter required field.");
    }
  }

  function clearAll() {
    setData([]);
    setId(1);
  }

  return (
    <div id="box">
      <Input label="Full Name:" bool={true} nameRef={nameRef} />
      <Input label="Appointment Date:" bool={false} dateRef={dateRef} />
      <div id="submitBtn">
        <button onClick={addAppointment} className="btn">
          Add Appointment
        </button>
      </div>
      <h2 className="upper">Appointment List</h2>
      <List data={data} clearAll={clearAll} setData={setData} />
    </div>
  );
}

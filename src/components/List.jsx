import { useState } from "react";

export default function List({ data, clearAll, setData }) {
  const [editingId, setEditingId] = useState(null);
  const [editedItem, setEditedItem] = useState({
    name: "",
    date: "",
  });

  function handleEdit(item) {
    setEditingId(item.id);
    setEditedItem({ name: item.name, date: item.date });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedItem((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSave() {
    data.filter(
      (items) =>
        items.id === editingId &&
        ((items.name = editedItem.name), (items.date = editedItem.date))
    );
    setEditingId(null);
  }

  function handleDelete(id) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  function handleCancel() {
    setEditingId(null);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="name"
                    defaultValue={item.name}
                    onChange={handleChange}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="date"
                    name="date"
                    defaultValue={item.date}
                    onChange={handleChange}
                  />
                ) : (
                  item.date
                )}
              </td>
              <td id="btnCentre">
                {editingId === item.id ? (
                  <>
                    <button onClick={handleSave} className="btn2">
                      Save
                    </button>
                    <button onClick={handleCancel} className="btn2">
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(item)} className="btn2">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="submitBtn">
        <button onClick={clearAll} className="btn">
          Clear All Appointment
        </button>
      </div>
    </>
  );
}

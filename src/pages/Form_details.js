import React, { useState } from "react";
import { fetchTodo } from "./api/todo";
const FormDetails = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetchTodo();
    setData(data);
    console.log("fetched data", data);
  };
  useState(() => {
    fetchData();
  }, []);
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDetails;

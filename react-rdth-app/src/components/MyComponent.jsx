import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServerData } from "../redux/Action";

const MyComponent = () => {
  let { loading, error, data } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServerData);
    // getServerData(dispatch)
  
  }, []);
  return loading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : (
    <div>
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;

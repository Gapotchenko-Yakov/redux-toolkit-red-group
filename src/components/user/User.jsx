import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user);
  const { getUserById } = useActions();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => getUserById()}>Get User</button>
      <table>
        {Object.keys(user).map((prop) => (
          <tr key={prop}>
            <td>{prop}</td>
            <td>{user[prop]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default User;

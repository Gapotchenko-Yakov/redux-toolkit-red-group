import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const User = () => {
  const { isLoading, error, user } = useTypedSelector((state) => state.user);
  const { getUserById } = useActions();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  return (
    <div>
      <button onClick={() => getUserById(0)}>Get User</button>
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

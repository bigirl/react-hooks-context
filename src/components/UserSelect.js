import React, { useState, useEffect, useContext } from "react";
import userService from "../services/userService";
import { isValidUserId, UNKNOWN_USER } from "../services/consts";
import { PageContext } from "../services/PageContextProvider";
// UI
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function UserSelect() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useContext(PageContext);

  useEffect(function () {
    userService.getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function handleSelectUser(userId) {
    if (isValidUserId(userId)) {
      setSelectedUserId(userId);
    } else {
      setSelectedUserId(UNKNOWN_USER);
    }
  }

  return (
    <Select
      id="select-user"
      defaultValue=""
      displayEmpty={true}
      onChange={(event) => handleSelectUser(event.target.value)}
    >
      <MenuItem value="">None</MenuItem>
      {users &&
        users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
    </Select>
  );
}

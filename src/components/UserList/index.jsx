import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list").then((data) => {
      if (data) setUsers(data);
      else console.error("Không thể tải danh sách người dùng.");
    });
  }, []);

  return (
    <div>
      <List component="nav">
        {users.length > 0 ? (
          users.map((item) => (
            <React.Fragment key={item._id}>
              <ListItem>
                <ListItemText
                  primary={
                    <Link
                      to={`/users/${item._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {item.first_name} {item.last_name}
                    </Link>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1">No users found.</Typography>
        )}
      </List>
    </div>
  );
}

export default UserList;

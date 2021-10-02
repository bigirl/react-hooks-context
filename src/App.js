import React, { useContext } from "react";
import UserSelect from "./components/UserSelect";
import UserCourses from "./components/UserCourses";
import { isValidUserId } from "./services/consts";
import { PageContext } from "./services/PageContextProvider";
// UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {},
  title: {
    display: "inline"
  },
  gridItem: {
    padding: 10
  }
}));

export default function App() {
  const [selectedUserId] = useContext(PageContext);
  const classes = useStyle();

  return (
    <Grid className={classes.root}>
      <Grid item={true} className={classes.gridItem}>
        <Typography className={classes.title}>Select user: </Typography>
        <UserSelect />
      </Grid>
      <Grid item={true} className={classes.gridItem}>
        {isValidUserId(selectedUserId) && (
          <>
            <Typography>Courses for user id: {selectedUserId}</Typography>
            <UserCourses />
          </>
        )}
      </Grid>
    </Grid>
  );
}

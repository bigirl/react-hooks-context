import React, { useState, useEffect, useContext } from "react";
import userService from "../services/userService";
import { PageContext } from "../services/PageContextProvider";

export default function UserCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState("loading...");
  const [selectedUserId] = useContext(PageContext);

  useEffect(
    function () {
      setCourses([]);

      userService.getUserCourses(selectedUserId).then((coursesList) => {
        setCourses(coursesList);
        if (!coursesList.length) {
          setLoading("No courses found");
        }
      });
    },
    [selectedUserId]
  );

  return (
    <>
      {courses.length
        ? courses.map((course) => <p key={course.id}>{course.name}</p>)
        : loading}
    </>
  );
}

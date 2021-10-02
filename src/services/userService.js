// Users list for exercise
const users = [
    {
      id: 1,
      name: "Shalom",
      courses_ids: [1, 3]
    },
    {
      id: 2,
      name: "Oleg",
      courses_ids: [3, 4]
    },
    {
      id: 3,
      name: "David",
      courses_ids: []
    }
  ];
  
  // Courses list for exercise
  const courses = [
    {
      id: 1,
      name: "English"
    },
    {
      id: 2,
      name: "Mathematics"
    },
    {
      id: 3,
      name: "OOP"
    },
    {
      id: 4,
      name: "Algorithms"
    }
  ];
  
  // Simple implementation of service which implements
  // 1. Get all users
  // 2. Get all courses with user filter.
  class userService {
    getAllUsers() {
      return Promise.resolve(users);
    }
  
    getUserById(userId) {
      const user = users.filter((u) => u.id === parseInt(userId, 10)).pop();
      return Promise.resolve(user);
    }
  
    // Simple version of get courses by user - part I
    //getUserCourses(userId) {
    //  return new Promise((resolve, reject) => {
    //    this.getUserById(userId).then(user => {
    //      console.log({ user, userId });
    //      return resolve(
    //       courses.filter(course => user.courses_ids.includes(course.id))
    //      );
    //    });
    //  });
    //}
  
    // Timeout version of get courses by user - part II
    getUserCourses(userId) {
      return new Promise((resolve, reject) => {
        this.getUserById(userId).then((user) => {
          console.log({ user, userId });
          setTimeout(() => {
            return resolve(
              courses.filter((course) => user.courses_ids.includes(course.id))
            );
          }, 1000 * (userId === 1 ? 1 : 3));
        });
      });
    }
  }
  
  export default new userService();
  
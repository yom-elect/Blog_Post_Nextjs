import fetch from "isomorphic-unfetch";

export const getAllUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
      robots: data,
    };
  } catch (err) {}
};

export const getAllUsersIds = async () => {
  const data = await getAllUsers();
  return data.robots.map((info) => {
    return {
      params: {
        id: info.id.toString(),
      },
    };
  });
};

export const getUserInfo = async (id) => {
  const { robots } = await getAllUsers();
  for (let ele in robots) {
    if (robots[ele].id == id) {
      return {
        props: {
          data: robots[ele],
        },
      };
    }
  }
};

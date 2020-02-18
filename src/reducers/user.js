const initialState = {
  user: {
    firstName: "",
    lastName: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return action.user;
    }

    case "REMOVE_USER": {
      return {
        firstName: "",
        lastName: ""
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;

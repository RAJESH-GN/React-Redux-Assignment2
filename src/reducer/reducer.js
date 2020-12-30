const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const person = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(person),
      };

    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter((person) => person.id != action.personId),
      };
    default:
      break;
  }
  return state;
};

export default reducer;

export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeoples = [...state.people, action.payload];
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newPeople = state.people.filter((person) => person.id !== id);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item removed",
    };
  }
  // return state;
  throw new Error("no matching action type");
};

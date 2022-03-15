const initialState = [
  {
    id: 0,
    title: "Bon Jovi Live",
    date: "2022-06-03",
    time: "20:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan et odio pulvinar efficitur. Morbi lobortis elit a pretium convallis. Etiam vitae bibendum sapien. Donec ut arcu massa. Cras sollicitudin.",
    img: "./assets/images/bon-jovi.jpg",
    category: "Culture",
    phone: "+48 000 000 000",
    email: "example@somemail.com",
    city: "Warsaw",
  },
  {
    id: 1,
    title: "Krwiodawstwo",
    date: "2022-08-05",
    time: "10:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan et odio pulvinar efficitur. Morbi lobortis elit a pretium convallis. Etiam vitae bibendum sapien. Donec ut arcu massa. Cras sollicitudin.",
    img: "./assets/images/krwiodawstwo.png",
    category: "Health",
    phone: "+48 000 999 000",
    email: "example1@somemail.com",
    city: "Rybnik",
  },
  {
    id: 2,
    title: "Silesia Marathon",
    date: "2022-10-03",
    time: "11:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan et odio pulvinar efficitur. Morbi lobortis elit a pretium convallis. Etiam vitae bibendum sapien. Donec ut arcu massa. Cras sollicitudin.",
    img: "./assets/images/news-61-zapisy2020.png",
    category: "Sport",
    phone: "+48 999 999 000",
    email: "example2@somemail.com",
    city: "Katowice",
  },
];

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_EVENT":
      const updateState = state.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      state = updateState;
      return state;
    case "DELETE_EVENT":
      const filterEvents = state.filter(
        (event) => event.id !== action.payload && event
      );
      state = filterEvents;
      return state;
    default:
      return state;
  }
};

export default eventReducer;

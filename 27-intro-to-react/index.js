let state = {
  restaurants: [
    {
      name: "wasabi"
    },
    {
      name: "itsu"
    },
    {
      name: "sushi surprise"
    }
  ]
};

const appEl = document.getElementById("root");

const newRestoButton = document.querySelector("button");

const RestaurantItem = props => {
  return Oppidan.createElement("div", { innerText: props.restaurant.name });
};

const RestaurantList = props => {
  const el = Oppidan.createElement("ul", {
    children: props.restaurants.map(restaurant =>
      RestaurantItem({ restaurant })
    )
  });
  return el;
};

const render = state => {
  appEl.append(RestaurantList({ restaurants: state.restaurants }));
  // state.restaurants.forEach(restaurant => {
  //   const div = Oppidan.createElement("div", { innerText: restaurant.name });
  //   appEl.append(div);
  // });
};

render(state);

const button = Oppidan.createElement("button", {
  innerText: "save",
  onClick: event => {
    console.log(event);
  }
});
appEl.append(button);

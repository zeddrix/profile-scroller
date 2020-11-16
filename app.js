const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingFor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Sara Swann",
    age: 18,
    gender: "female",
    lookingFor: "Zeddrix F.",
    location: "Tanza PH",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const profileIterator = (profiles) => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
};

const profiles = profileIterator(data);

const nextProfile = () => {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector("#profile-display").innerHTML = `
   <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
   </ul>
   `;

    document.querySelector(
      "#image-display"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    location.reload();
  }
};

nextProfile();

document.querySelector("#next").addEventListener("click", nextProfile);

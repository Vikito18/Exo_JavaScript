let users = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24").then((res) =>
    res.json().then((data) => {
      users = data.results;
      console.log(users);
    })
  );
};

const displayUsers = async () => {
  await fetchUser();

  usersList.innerHTML = users
    .map(
      (user) => `
      <div id="list"> 
      <img src="${user.picture.large}"/>
      <h3>${user.name.first} ${user.name.last.toUpperCase()}</h3>
      <span>sex : ${user.gender}</span>
      <span>âge : ${user.dob.age}</span>
      <span>email : ${user.email}</span>
      <span>tél : ${user.phone}</span>
      </div>
    
    `
    )
    .join("");
};

displayUsers();
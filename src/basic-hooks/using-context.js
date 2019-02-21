import React, { createContext, useState, useContext } from "react";

// I just want to point out that using useContext, there's
// no longer any need for the `unstated` package that we have been using:
// When combined with `useState`, the `useContext` hook now provides us a
// method we can call to update the context.
// We no longer need a separate dispatcher to do so!
// You'll notice we do not render `UserContext.Consumer` anywhere.

// A quick note on multiple contexts:
// https://daveceddia.com/usecontext-hook/
// No more nesting.

const UserContext = createContext();

// In the real world this would come from your logged in user.
const profiles = [
  {
    name: "Darshan",
    email: "darshan@d3.machines"
  },
  {
    name: "Patrick",
    email: "Patrick@d3.machines"
  }
];

function UserProfile() {
  const [user] = useContext(UserContext); // note we only extract the value!
  const emailLink = `mailto:${user.email}`;

  return (
    <section>
      <h3>{user.name}</h3>
      <a href={emailLink} title={emailLink}>
        {user.email}
      </a>
    </section>
  );
}

function ChangeProfile() {
  const [user, setUser] = useContext(UserContext); // note here we use both!
  const updateUser = event => {
    const profile = profiles[event.target.value];
    setUser(profile); // Yes, this is actually updating the value in the context provider! (Ln 58)
  };

  return (
    <select onChange={updateUser} defaultValue={user.email}>
      {profiles.map((profile, index) => (
        <option value={index} key={profile.email}>
          {profile.name}
        </option>
      ))}
    </select>
  );
}

function User({ children }) {
  const userState = useState(profiles[0]);

  // The trick is here: the value is actually consuming the state value AND the setter
  // It is that setter we are calling above! When THIS component re-renders because of `setState`,
  // the provider gets the new value. Be careful with this - you may cause renders too high in the
  // component tree, impacting performance.
  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  );
}

export default function ContextExample() {
  return (
    <header className="App-header">
      <User>
        <ChangeProfile />
        <UserProfile />
      </User>
    </header>
  );
}
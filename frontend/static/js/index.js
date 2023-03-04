console.log("JS is loaded");

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing Dashboard") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  //Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname == route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  console.log(match.route.path);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});

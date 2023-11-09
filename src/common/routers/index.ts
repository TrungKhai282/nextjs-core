// example: http://localhost:3000/
export const RootRoute = "/";

// example: http://localhost:3000/[route]
export const AppRoutes = {
  home: RootRoute,
  signIn: RootRoute + "sign-in",
  signUp: RootRoute + "sign-up",
  category: RootRoute + "category",
  product: RootRoute + "product",
};

import { abortNavigation } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    // TODO: add the routes you want to exclude here
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo('/');
});

const mapping: Record<string, string> = {
  universities: 'university',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

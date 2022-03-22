export function checkPermission(check) {
  const permissions = ['ALL', 'DEPARTMENT WRITE', 'DESIGNATION WRITE'];

  return permissions.some((item) => check.includes(item));
}

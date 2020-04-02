export const storage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
  localStorage.removeItem('cartData');
  localStorage.removeItem('isCheckedAll');
}

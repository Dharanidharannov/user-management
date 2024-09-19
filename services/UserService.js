class UserService {
  
    static getUsers() {
      return JSON.parse(localStorage.getItem('users')) || [];
    }
  
   
    static getUserById(id) {
      const users = UserService.getUsers();
      return users.find(user => user.id === id);
    }
  
  
    static addUser(user) {
      const users = UserService.getUsers();
      users.push(user);
      UserService.updateLocalStorage(users);
    }
  
  
    static updateUser(updatedUser) {
      let users = UserService.getUsers();
      users = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
      UserService.updateLocalStorage(users);
    }
  
    
    static deleteUser(id) {
      let users = UserService.getUsers();
      users = users.filter(user => user.id !== id);
      UserService.updateLocalStorage(users);
    }
  
    static updateLocalStorage(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  
  export default UserService;
  
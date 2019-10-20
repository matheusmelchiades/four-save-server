class UserStore {
  get rules() {
    return {
      firstname: 'required|string|min:3',
      lastname: 'required|string|min:3',
      email: 'required|email|unique:users',
      username: 'required|string|min:6|unique:users',
      password: 'required|string|min:4',
      address: 'required|string|min:5',
      region: 'required|string|min:5',
      country: 'required|string|min:5',
      latitude: 'number',
      longitude: 'number',
      perfilId: 'required|integer|not_equals:1',
    };
  }

  get messages() {
    return {
      /**
       * EMAIL
       */
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',

      /**
       * Name
       */
      'firstname.required': 'DEU RUIM',
    };
  }
}

module.exports = UserStore;

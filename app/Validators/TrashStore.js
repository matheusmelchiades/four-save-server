class TrashStore {
  get rules() {
    return {
      // validation rules
      description: 'required|string|min:10',
      quantity: 'required|integer|min:1',
      userId: 'required|integer',
      trashCategoryId: 'required|integer',
    };
  }
}

module.exports = TrashStore;

class DisplacementStore {
  get rules() {
    return {
      userOrigin: 'required|integer',
      userDestiny: 'required|integer',
      originLatitude: 'required|number',
      originLongitude: 'required|number',
      destinyLatitude: 'required|number',
      destinyLongitude: 'required|number',
      producerValidation: 'required|boolean',
      consumerValidation: 'required|boolean',
      trashId: 'required|integer',
    };
  }
}

module.exports = DisplacementStore;

class DisplacementStore {
  get rules() {
    return {
      userOrigin: 'required|integer',
      userDestiny: 'required|integer',
      originLatitude: 'required|float',
      originLongitude: 'required|float',
      destinyLatitude: 'required|float',
      destinyLongitude: 'required|float',
      producerValidation: 'required|boolean',
      consumerValidation: 'required|boolean',
      userTrashesId: 'required|integer',
    };
  }
}

const x = {
  userOrigin: 1,
  userDestiny: 2,
  originLatitude: 1212.12,
  originLongitude: 0.12239,
  destinyLatitude: 291217.12,
  destinyLongitude: 2917.1121212,
  producerValidation: false,
  consumerValidation: false,
  userTrashesId: 1,
};

module.exports = DisplacementStore;

'use strict';

class Component {
  constructor(controllerCallBacks, dataStore, types) {
    this._inputs = this._getInput(dataStore, types);
    this._controllerCallBacks = controllerCallBacks;
  }

  _getInput(dataStore, types) {
    var result = {};
    dataStore.forEach(function (data) {
      types.forEach(function (type) {
        if (type === data.type) {
          result[type] = data.data;
        }
      });
    });
    return result;
  }

  setDataStore(dataStore) {
    this._dataStore = datastore;
  }
}

module.exports = Component;
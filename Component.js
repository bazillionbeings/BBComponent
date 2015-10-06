'use strict';

class Component {
    constructor(controllerCallBacks, inputTypes) {
        this._inputTypes = inputTypes;
        this._controllerCallBacks = controllerCallBacks;
    }

    get inputTypes() {
        return this._inputTypes;
    }
}

module.exports = Component;
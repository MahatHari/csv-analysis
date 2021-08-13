"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datesToString = void 0;
exports.datesToString = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

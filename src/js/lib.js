"use strict"

const $ = function (fieldName) {
    return document.querySelector("." + fieldName);
}

const all = function (fieldName) {
    return document.querySelectorAll("." + fieldName);
}

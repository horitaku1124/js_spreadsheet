"use strict";

const TYPE_NONE = Symbol('NONE'),
    TYPE_COLUMN = Symbol('COLUMN'),
    TYPE_FROM = Symbol('FROM'),
    TYPE_WHERE = Symbol('WHERE'),
    TYPE_VALUES = Symbol('VALUES');

const NODE_TYPE_SELECT = Symbol('SELECT'),
    NODE_TYPE_UPDATE = Symbol('UPDATE'),
    NODE_TYPE_INSERT = Symbol('INSERT'),
    NODE_TYPE_DELETE = Symbol('DELETE');

const NODE_VALUE = Symbol('VALUE'),
    NODE_CHILD_TYPE_COLUMN = Symbol('TYPE_COLUMN'),
    NODE_CHILD_TYPE_FROM = Symbol('TYPE_FROM'),
    NODE_CHILD_TYPE_WHERE = Symbol('TYPE_WHERE'),
    NODE_CHILD_TYPE_VALUES = Symbol('TYPE_VALUES'),
    NODE_CHILD_TYPE_INTO = Symbol('TYPE_INTO');

class Node {
    constructor(type, value) {
        this._type = type;
        this._value = value;
    }

    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get children() {
        return this._children;
    }
    set children(children) {
        this._children = children;
    }

    addChild(node) {
        if(typeof this._children === 'undefined') {
            this._children = [];
        }
        this._children.push(node);
    }
}
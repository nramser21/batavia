var exceptions = require('../core').exceptions;
var callables = require('../core').callables;
var type_name = require('../core').type_name;
var None = require('../core').None;


function iter(args, kwargs) {
    var types = require('../types');

    if (arguments.length != 2) {
        throw new exceptions.BataviaError.$pyclass('Batavia calling convention not used.');
    }
    if (kwargs && Object.keys(kwargs).length > 0) {
        throw new exceptions.TypeError.$pyclass("iter() doesn't accept keyword arguments");
    }
    if (!args || args.length === 0) {
        throw new exceptions.TypeError.$pyclass("iter() expected at least 1 arguments, got 0");
    }
    if (args.length == 2) {
        throw new exceptions.NotImplementedError.$pyclass("Builtin Batavia function 'iter' with callable/sentinel not implemented");
    }
    if (args.length > 2) {
        throw new exceptions.TypeError.$pyclass("iter() expected at most 2 arguments, got 3");
    }

    try {
        return callables.call_method(args[0], "__iter__", []);
    } catch (e) {
        throw new exceptions.TypeError.$pyclass("'" + type_name(args[0]) + "' object is not iterable");
    }
}
iter.__doc__ = 'iter(iterable) -> iterator\niter(callable, sentinel) -> iterator\n\nGet an iterator from an object.  In the first form, the argument must\nsupply its own iterator, or be a sequence.\nIn the second form, the callable is called until it returns the sentinel.';

module.exports = iter;

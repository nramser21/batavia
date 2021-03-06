var PyObject = require('../core').Object;
var Type = require('../core').Type;

/*************************************************************************
 * A Python code object
 *************************************************************************/

function Code(kwargs) {
    PyObject.call(this);

    this.co_argcount = kwargs.argcount || 0;
    this.co_kwonlyargcount = kwargs.kwonlyargcount || 0;
    this.co_nlocals = kwargs.nlocals || 0;
    this.co_stacksize = kwargs.stacksize || 0;
    this.co_flags = kwargs.flags || 0;
    this.co_code = kwargs.code;
    this.co_consts = kwargs.consts || [];
    this.co_names = kwargs.names || [];
    this.co_varnames = kwargs.varnames || [];
    this.co_freevars = kwargs.freevars || [];
    this.co_cellvars = kwargs.cellvars || [];
    // co_cell2arg
    this.co_filename = kwargs.filename || '<string>';
    this.co_name = kwargs.name || '<module>';
    this.co_firstlineno = kwargs.firstlineno || 1;
    this.co_lnotab = kwargs.lnotab || '';
    // co_zombieframe
    // co_weakreflist
}

Code.prototype = Object.create(PyObject.prototype);
Code.prototype.__class__ = new Type('code');
Code.prototype.__class__.$pyclass = Code;

/**************************************************
 * Module exports
 **************************************************/

module.exports = Code;

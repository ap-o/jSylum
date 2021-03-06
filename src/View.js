/*
* View
# -
*
* Copyright (c) 2012 DigitalJohn.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function(window) {

/**
* A base view component.
*
* @class View
* @constructor
**/
var View = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = View.prototype;

	/**
	 * @property _parent
	 * @protected
	 * type DOM Element
	 * @default null
	 **/
	p._parent = null;

	/**
	 * @property _el
	 * @protected
	 * type DOM Element
	 * @default null
	 **/
	p._el = null;

	/**
	 * @property _elType
	 * @protected
	 * type DOM Element
	 * @default "div"
	 **/
	p._elType = "div";

	/**
	 * Initialization method.
	 *
	 * @protected
	 **/
	p.initialize = function(parent) {
		this._parent = parent;

		this.draw();

		injector.getSingleton( MediatorMap ).mediate(this);
	}

	/**
	 * The draw function, all object creation should happen here.
	 *
	 * @protected
	 **/
	p.draw = function() {
		this._el = document.createElement( this._elType );
		this._parent.appendChild( this._el );
	}

	/**
	 * The redraw function, all object changes should happen here.
	 *
	 * @protected
	 **/
	p.redraw = function() {

	}

	/**
	 * The destroy function, all objects and listeners should be removed here.
	 *
	 * @protected
	 **/
	p.destroy = function() {
		this._parent.removeChild(this._el);
	}

	/**
	 * Gets some text from the LanguageManager
	 *
	 * @param {String} key
	 * @protected
	 **/
	p.getText = function(key){
		return window.lang.getText.apply(window.lang, arguments);
	},

window.View = View;
}(window));

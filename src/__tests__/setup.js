import jsdom from 'jsdom'

const { JSDOM } = jsdom

console.info('WTF', JSDOM)

global.window = new JSDOM('<!doctype html><html><body></body></html>').window
global.document = global.window.document
global.navigator = global.window.navigator

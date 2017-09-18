function foo(){
    console.log('foo');
}
setfTimeout(foo,0);
setImmediate(foo);
process.nextTick(foo);
console.log('bar');
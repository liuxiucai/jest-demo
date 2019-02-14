const hello=require('../coverage.js');

describe('Multiple test',()=>{
    test('hell default-> Hello liu',()=>{
        expect(hello()).toBe('Hello liu')
    })
    // test('Hello hao',()=>{
    //     expect(hello('hao')).toBe('Hello hao')
    // })

})
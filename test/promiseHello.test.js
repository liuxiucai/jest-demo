var promiseHello=require('../promiseHello.js');

test('promise hello',()=>{
    promiseHello('liu').then((res)=>{
        expect(res).toBe('Hello liu');
    })
})
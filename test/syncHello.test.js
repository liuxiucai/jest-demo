const hello=require('../syncHello');

test('hello to liu',(done) => {
    hello('liu', (result) => {
        expect(result).toBe('Hello liu');
        done();
    })
})
const sum=require('../sum.js');

describe('分组测试',()=>{
    beforeAll(() => {
        console.log('测试开始')
    })

    test('adds 2+2 to equal 4',()=>{
        expect(sum(2,2)).toBe(4);
    })
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    afterAll(() => {
       console.log('测试结束清理所有')
    })

})

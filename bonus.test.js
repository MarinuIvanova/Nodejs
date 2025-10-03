const calculateBonus = require("./bonus")

it('Bonus calculate', () => {
    expect(calculateBonus(10, 30)).toBe(40)
})

test('>50', ()=> {
    expect(calculateBonus(20,60)).toEqual(50)
})


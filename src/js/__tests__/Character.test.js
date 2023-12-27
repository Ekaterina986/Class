import Character from '../Character';

test('create copy', () => {
    const character = new Character( 'abc', 'Bowerman');

    const correct = {
        type: 'Bowerman',
        name: 'abc',
        attack: null,
        defence: null,
        level: 1,
        health: 100,
    }

    expect (character).toEqual(correct);

    expect(() => {
        const character = new Character( 'a', 'Bowerman');
    }).toThrow();

    expect(() => {
    const character = new Character( 'aaa', 'Bowerman1');
    }).toThrow();
});

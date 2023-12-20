import Character from '../Character';

test('create copy', () => {
    const character = new Character( 'abc', 'Bowerman');

    expect(character.type).toBe('Bowerman');
    expect(character.name).toBe('abc');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);


    expect(() => {
        const character = new Character( 'a', 'Bowerman');
    }).toThrow();

    expect(() => {
    const character = new Character( 'aaa', 'Bowerman1');
    }).toThrow();
});

import Bowerman from '../Bowerman';

test('create copy', () => {
    const bowerman = new Bowerman( 'abc');

    expect(bowerman.type).toBe('Bowerman');
    expect(bowerman.name).toBe('abc');
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);

});
import Undead from '../Undead';

test('create copy', () => {
    const undead = new Undead( 'abc');

    expect(undead.type).toBe('Undead');
    expect(undead.name).toBe('abc');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);

});
import Swordsman from '../Swordsman';

test('create copy', () => {
    const swordsman = new Undead( 'abc');

    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.name).toBe('abc');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);

});
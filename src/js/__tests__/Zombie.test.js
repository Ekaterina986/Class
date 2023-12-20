import Zombie from '../Zombie';

test('create copy', () => {
    const zombie = new Zombie( 'abc');

    expect(zombie.type).toBe('Zombie');
    expect(zombie.name).toBe('abc');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);

});

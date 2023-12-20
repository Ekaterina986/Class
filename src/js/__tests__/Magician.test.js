import Magician from '../Magician';

test('create copy', () => {
    const magician = new Magician( 'abc');

    expect(magician.type).toBe('Magician');
    expect(magician.name).toBe('abc');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);

});
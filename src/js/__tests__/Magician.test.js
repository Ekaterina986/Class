import Magician from '../Magician';

test('create copy', () => {
    const magician = new Magician( 'abc');

    const correct = {
        type: 'Magician',
        name: 'abc',
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
    }

    expect (magician).toEqual(correct);
});
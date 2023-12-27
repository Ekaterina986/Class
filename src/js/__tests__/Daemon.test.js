import Daemon from '../Daemon';

test('create copy', () => {
    const daemon = new Daemon( 'abc');

    const correct = {
        type: 'Daemon',
        name: 'abc',
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
    }

    expect (daemon).toEqual(correct);

});
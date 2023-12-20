import Daemon from '../Daemon';

test('create copy', () => {
    const daemon = new Daemon( 'abc');

    expect(daemon.type).toBe('Daemon');
    expect(daemon.name).toBe('abc');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);

});
import Bowerman from '../bowermanClass';
import Zombie from '../zombieClass';
import Daemon from '../daemonClass';


describe('Tests from levelUp', () => {
  test('levelUp 1 to 2', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
    };
    bowerman.levelUp();
    expect(bowerman).toEqual(can2);
  });
  test('levelUp 2 to 3', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 100, level: 3, attack: 36, defence: 36,
    };
    bowerman.levelUp();
    bowerman.levelUp();
    expect(bowerman).toEqual(can2);
  });
  test('levelUp 1 to 2', () => {
    const zombie = new Zombie('Rob', 'Zombie');
    const can2 = {
      name: 'Rob', type: 'Zombie', health: 100, level: 2, attack: 48, defence: 48,
    };
    zombie.levelUp();
    expect(zombie).toEqual(can2);
  });
  test('levelUp 2 to 3', () => {
    const zombie = new Zombie('Rob', 'Zombie');
    const can2 = {
      name: 'Rob', type: 'Zombie', health: 100, level: 3, attack: 57.6, defence: 57.6,
    };
    zombie.levelUp();
    zombie.levelUp();
    expect(zombie).toEqual(can2);
  });
  test('levelUp 1 to 2', () => {
    const daemon = new Daemon('Astoret', 'Daemon');
    const can2 = {
      name: 'Astoret', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48,
    };
    daemon.levelUp();
    expect(daemon).toEqual(can2);
  });
  test('levelUp with 0 hp', () => {
    const zombie = new Zombie('Rob', 'Zombie');
    const can2 = {
      name: 'Rob', type: 'Zombie', health: 0, level: 1, attack: 40, defence: 40,
    };
    zombie.damage(500);
    zombie.levelUp();
    expect(zombie).toEqual(can2);
  });
});


describe('Tests from damage', () => {
  test('damage 0', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(0);
    expect(bowerman).toEqual(can2);
  });

  test('damage 0.1', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 99.925, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(0.1);
    expect(bowerman).toEqual(can2);
  });

  test('damage 50', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(50);
    expect(bowerman).toEqual(can2);
  });

  test('damage 1000', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(1000);
    expect(bowerman).toEqual(can2);
  });

  test('damage -50', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(-50);
    expect(bowerman).toEqual(can2);
  });

  test('damage 10 from 0 health', () => {
    const bowerman = new Bowerman('legolas', 'Bowman');
    const can2 = {
      name: 'legolas', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25,
    };
    bowerman.damage(500);
    bowerman.damage(500);
    expect(bowerman).toEqual(can2);
  });


  test('damage 0', () => {
    const zombie = new Zombie('Rob', 'Zombie');
    const can2 = {
      name: 'Rob', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 40,
    };
    zombie.damage(0);
    expect(zombie).toEqual(can2);
  });
});


describe('Tests new failClass', () => {
  test('failname', () => {
    const bowerman = new Bowerman(1, 'Bowman');
    const can2 = {
      type: 'Bowman',
      attack: 25,
      defence: 25,
    };
    expect(bowerman).toEqual(can2);
  });

  test('failtype', () => {
    const bowerman = new Bowerman('legolas', 'Bowm');
    const can2 = {
      name: 'legolas',
      attack: 25,
      defence: 25,
    };
    expect(bowerman).toEqual(can2);
  });
});

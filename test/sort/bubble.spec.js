const sort = require('../../src/sort/bubble');
const expect = require('chai').expect

describe('> bubble sort algorithm', () => {
  describe('> Wrong Usage', () => {
    it('wrong parameter', () => {
      try {
        sort(5)
      } catch(e) {
        expect(e.message).to.equal('expect param 1 to be an Array');
      }
    });
  });

  it('sort number', () => {
    let arr = [5, 4, 3, 1, 2];
    let result = sort(arr);
    expect(result).to.deep.equal(
      [1, 2, 3, 4, 5]
    );

    arr = [-4, -4, -2, -2, 4, 3, 1, 2];
    result = sort(arr);
    expect(result).to.deep.equal(
      [-4, -4, -2, -2, 1, 2, 3, 4]
    );
  });

  it('sort letter', () => {
    let arr = ['a', 'c', 'd', 'b', 'e'];
    let result = sort(arr);
    expect(result).to.deep.equal(
      ['a', 'b', 'c', 'd', 'e']
    );
  });

  it('custom comparator', () => {
    let arr = [
      {
        value: 6,
      },
      {
        value: 3,
      },
      {
        value: 1,
      },
      {
        value: 4,
      }
    ];
    let result = sort(arr, (prev, next) => {
      if (prev.value > next.value) return 1;
      return -1;
    });
    expect(result).to.deep.equal([
      {
        value: 1,
      },
      {
        value: 3,
      },
      {
        value: 4,
      },
      {
        value: 6,
      }
    ]);
  });
});
// let nums = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 6, 3, 4, 8, 9, 8, 10];

// // function qiymatqaytar(arr) {
// //   let natija = [];
// //   for (let i of arr) {
// //     if (!natija.includes(i)) {
// //       natija.push(i);
// //     }
// //   }
// //   return natija;
// // }

// // console.log(qiymatqaytar(nums));

// function birmartaishtirok(arr) {
//   let natija = [];
//   for (let i of arr) {
//     if (nums.indexOf(i) === nums.lastIndexOf(i)) {
//       natija.push(i);
//     }
//   }
//   return natija;
// }

// console.log(birmartaishtirok(nums));

// let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function qoshish() {
//   let sum = [];
//   for (let i of nums2) {
//     if (i % 2 == 0) {
//       sum.push(Math.pow(i, 2));
//     } else {
//       sum.push(i);
//     }
//   }
//   return sum;
// }
// console.log(qoshish(nums2));

const Matem = {
  floor: function (float) {
    // pastga qarab yaxlitlaydi
    if (float == 0) {
      return 0;
    }
    if (float > 0) {
      return float - (float % 1);
    } else {
      return float - (float % 1) - 1;
    }
  },

  ceil: function (float) {
    // tepaga qarab yaxlitlaydi
    if (float == 0) {
      return 0;
    }
    if (float > 0) {
      return float - (float % 1) + 1;
    } else {
      return float - (float % 1);
    }
  },

  round: function (float) {
    if (float == 0) {
      return 0;
    }

    if (float > 0) {
      if (float % 1 > 0.5) {
        return float - (float % 1) + 1;
      }
      return float - (float % 1);
    } else {
      if (float % 1 < -0.5) {
        return float - (float % 1) - 1;
      }
      return float - (float % 1);
    }
  },
  max: function (...args) {
    if (args.length == 0) {
      return 0;
    }
    let engkatta = args[0];
    for (let i of args) {
      if (i > engkatta) {
        engkatta = i;
      }
    }
    return engkatta;
  },

  min: function (...args) {
    if (args.length == 0) {
      return 0;
    }
    let engkichik = args[0];
    for (let i of args) {
      if (i < engkichik) {
        engkichik = i;
      }
    }
    return engkichik;
  },
  trunc: function (float) {
    if (float == 0) {
      return 0;
    }

    if (float > 0) {
      return float - (float % 1);
    } else {
      return float - (float % 1);
    }
  },
  pow: function (arg1, arg2) {
    return arg1 ** arg2;
  },
};

console.log(Matem.round(-2.2));
console.log(Matem.round(3.5));
console.log(Matem.round(4.6));
console.log(Matem.round(-2.8));

console.log(Matem.ceil(3.2));

console.log(Matem.max(-1, -2, -3));
console.log(Matem.max(6, 5, 4));

console.log(Matem.min(56, 44, 21));
console.log(Matem.min(-10, -12, -1));

console.log(Matem.trunc(-12.5));
console.log(Matem.trunc(13.8));

console.log(Matem.pow(2, 29));

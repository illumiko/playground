//REGEX
/*const gObj = {};
(() => {
  const main = (x) => {
  };
  main();
})();
//requestAnimationFrame(frame)
//if(gObj.stopMain === 100){
//}
*/
const test = (reEx, reFl, sen) => {
  const regex = new RegExp(`${reEx}`, `${reFl}`);
  let sentence = `${sen}`;
  const result = regex.test(sentence);
  return result;
};
const match = (reEx, reFl, sen) => {
  const regex = new RegExp(`${reEx}`, `${reFl}`);
  let sentence = `${sen}`;
  const result = sentence.match(regex);
  return result;
};
const checkUserName = (userName) => {
  const checker = /^[a-z]([a-z]+[\d]+$|[a-z]{1,})/gi;
  const result = checker.test(userName);
  return result;
};
const obb = {
  x: "this is an item",
  y: "this is an item below an item",
};
const func2 = ({ x: z, y: v }) => {
  return [z, v];
};
//console.log(func2(obb))
let arr = [1, 2];
const func1 = (...ar) => {
  return ar;
};

//console.log(func1(...arr))
//console.log(match('', 'g', 'Aaaaaaaaaaaaaaaarrrgh'))
//console.log(match(".+", "g", "<h1>Winter is coming</h1>"));
//console.log(match("\\W+", 'g', "<h1>Winter is coming</h1>"));
//console.log(match('^[\\w+]([a-z]+)$', '', 'hi im eyanat')) // to get the last word
//console.log(match('^\\w+', 'g', 'hi im eyanat')) // to get the first word

//ASYNC JS
const startTime = Date.now();
const log = (v) => console.log(`${v} \n ELASPED: ${Date.now() - startTime}`);
const loop = () => {
  //no async
  /*
  let i = 0
  while (i < 10000000) {i++;}
  return 'done'
  */

  //false async
  /*
   return new Promise((resolve,reject) => {
      let i = 0
      while (i < 1000000000) {i++;}
   })
  */

  //true async
  return Promise.reject().catch((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return i;
  });
};
//log('hello')
//loop().then(console.log)
//log('bye bye')

const getFruit = async (name) => {
  const fruits = {
    apple: 1,
    oragen: 2,
    banana: 3,
  };
  if (!name) {
    return fruits;
  } else {
    return fruits[name];
  }
};

//getFruit("apple").then(console.log);

const reLoop = async () => {
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
  return i;
};
//log('hi')
//reLoop().then(log)

const makeSmoothie = async () => {
  try {
    let smoothieFruits = await getFruit();
    //throw 'no data'
    //let y = getFruit("oragen");
    return smoothieFruits;
  } catch (err) {
    return err;
  }
};

document.querySelector(".special").addEventListener("click", (e) => {
 fetch("https://api.adviceslip.com/advice")
 .then(v => v.json())
  .then(v2 => {e.target.innerHTML = v2.slip.advice})
});


//let fol = document.querySelector('.fol')
//let chan = document.querySelector('.chan')
//const chill = []
//const jp = []
//const nC = []
//const nNC = []


//const stuff = (e) => {
//  let x = prompt('ik')
//  let files = Object.values(fol.files)
//  let pass = []
//  files.forEach(i => pass.push(i.name) )
//  let got = selectArray(x,pass)
//  localStorage.setItem(x, JSON.stringify(got))
//}

//const selectArray = (x,pass) => {
//  if(x == 'jp'){
//    jp.push(pass)
//    return jp
//  } 
//   else if(x == 'nNC') {
//    nNC.push(pass)
//    return nNC
//  }
//   else if(x == 'chill') {
//    chill.push(pass)
//    return chill
//  }
//   else {
//    nC.push(pass)
//    return nC
//  }
//}
//const filter = () => {
//  let x = prompt('idkkk')
//  let files = Object.values(chan.files)
//  let pass = []
//  //getting list from current state
//  files.forEach(i => pass.push(i.name))
//  let got = selectArray(x,pass)
//  //getting list from last saved state 
//  let getFromList = JSON.parse(localStorage.getItem(x))
//  const fil = got.filter(i => !(getFromList.includes(i)))
//  console.log(fil)
//}
//fol.addEventListener('change', stuff)
//chan.addEventListener('change', filter)






let fileHandle
const opener = document.querySelector('button')
const fsOpen = async () => {
  [fileHandle] = await window.showOpenFilePicker()
  console.log(hello)
}
opener.addEventListener('click', fsOpen)

































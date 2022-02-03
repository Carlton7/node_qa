import cowsay from 'cowsay'

export const cowResponse = (str) => {
  return cowsay.say({text:str, r: true})
}


// function basic(string) {
//   return cowsay.say(string)
// }

// export const cowResponse = basic();
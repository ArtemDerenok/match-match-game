const shuffleArray = (array: JSX.Element[]) => {
  const copyArray = array;
  for (let i = copyArray.length - 1; i > 0; i -= 1)  {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = temp;
  }
  
  return copyArray;
}

export default shuffleArray

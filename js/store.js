function seedDbStore(seed = 250000) {
  let result = [];

  for (let i = 0; i < seed; i++) {
    result.push({
        id: i+1,
        name: generateRandomName()
    })
  }

  return result
}

async function getDbStoreData(offset,limit = 100){
    const result = seedDbStore()

    await new Promise(resolve => setTimeout(resolve,1000))
    
    return result.slice(offset,offset + limit)

}

function generateRandomName() {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const syllableCount = Math.floor(Math.random() * 3) + 1; // Random syllable count (1 to 3)
  
    function getRandomChar(chars) {
      return chars[Math.floor(Math.random() * chars.length)];
    }
  
    function generateSyllable() {
      const length = Math.floor(Math.random() * 2) + 1; // Syllable length (1 or 2 characters)
      let syllable = getRandomChar(consonants);
  
      if (length === 2) {
        syllable += getRandomChar(vowels);
      }
  
      syllable += getRandomChar(consonants);
  
      return syllable;
    }
  
    let name = "";
  
    for (let i = 0; i < syllableCount; i++) {
      name += generateSyllable();
    }
  
    return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
  }
  
  module.exports = {
    getDbStoreData
  }
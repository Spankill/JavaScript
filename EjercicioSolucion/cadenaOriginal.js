var possibleStringCount= function(word) {
      let groups = [];
      let currentGroup = word[0];

      // Dividir en grupos usando un for loop normal
      for (let i = 1; i < word.length; i++) {
            if (word[i] === currentGroup[0]) {
                  currentGroup += word[i];
            } else {
                  groups.push(currentGroup);
                  currentGroup = word[i];
            }
      }
      groups.push(currentGroup); // último grupo

      let results = [word]; // cadena original

      // Modificar un grupo a la vez
      for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            const char = group[0];
            const length = group.length;

            if (length > 1) {
                  for (let j = 1; j < length; j++) {
                        const newGroup = char.repeat(j);
                        let modified = "";

                        for (let k = 0; k < groups.length; k++) {
                              if (k === i) {
                                    modified += newGroup;
                              } else {
                                    modified += groups[k];
                              }
                        }

                        results.push(modified);
                  }
            }
      }

      // Puedes adicionar el contador aquí:

      return results.length;
      //console.log(results);
}

// Pruebas
console.log(possibleStringCount("abbcccc"));
console.log(possibleStringCount("aaabcdd"));
console.log(possibleStringCount("aaaa"));

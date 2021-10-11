let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length);

let removed = secretMessage.pop(); 
//console.log(secretMessage.length);

//adding to the list 
secretMessage.push('to','Program');

//replacing the string 'easily' by the index
secretMessage[secretMessage.indexOf('easily')] = 'right';
//Delete the first element in the list
secretMessage.shift();

//adding the string at the first index of the array
secretMessage.unshift('Programming');

//Replacing group of strings with the string 'know'
secretMessage.splice(secretMessage.indexOf('get'),5,'know');

//Displaying elements in the secretMessage array as one string
console.log(secretMessage.join(' '));
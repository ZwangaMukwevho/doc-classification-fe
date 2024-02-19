export function modifyPath(urlStr, operation='next') {
  // create URL object
  var myUrl = new URL(urlStr);
  var pathChunks = myUrl.pathname.split('/');

  // remove first chunk if it's empty (it will be if pathname started with a slash)
  if (!pathChunks[0]) pathChunks.shift();

  // increase or decrease each chunk that is a numeric value
  for (var i = 0; i < pathChunks.length; i++) {
    if (!isNaN(pathChunks[i])) { 
      if(operation === 'next') {
        pathChunks[i] = parseInt(pathChunks[i], 10) + 1;
      }
      else if(operation === 'back') {
        pathChunks[i] = parseInt(pathChunks[i], 10) - 1;
      }

      pathChunks.splice(i+1,0,'null');
      pathChunks.length = i + 2;
        break;
    }
  }

  // join chunks back together and add back onto url object
  myUrl.pathname = pathChunks.join('/');

  return myUrl.toString();
}
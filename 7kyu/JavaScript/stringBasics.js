/*
Background
We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!

Task
Remove all hashtags
Remove the leading "uid" from each user ID
Return an array of strings --> split the string
Each user ID should be written in only lowercase characters
Remove leading and trailing whitespaces
*/

// method 1
const getUsersIds = str => str.toLowerCase().split(', ')
  .map(id => id.split('').filter(e => e !== '#').join('').replace('uid', '').trim());

// method 2
const getUsersIds = str => {
  // split id str into an array and make lowercase
  let ids = str.toLowerCase().split(', ');
  // trim for whitespace, remove uid and hashtags
  return ids.map(id => {
    id = id.split('').filter(e => e !== '#').join('')
    return id.replace('uid', '').trim()
  });
};

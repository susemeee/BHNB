/*
[Star Object]
A star object is expressed as json.
Example of a star object is:
{
    "id": "0",
    "ra": "0.000000",
    "dec": "0.000000",
    "proper": "Sol",
    "ci": "0.656",
    "mag": "-26.700"
}   
*/

// Where to load json file.
// It can be changed.
const PATH = 'https://raw.githubusercontent.com/PngWnA/BHNB/master/resources/reduced.json';

// init : path -> star*
const init = async (path=PATH) => {
    const response = await fetch(path);
    console.log('[*] Init.');
    return response.json();
};

// load : star* -> <star>* 
const load = (stars) => {
    stars.map((star) =>{
        const elem = document.createElement('star');
        elem.setAttribute('ra', star.ra);
        elem.setAttribute('dec', star.dec);
        document.getElementById("stars").append(elem);
    });
    console.log(`[*] Loaded ${stars.length} stars.`);
    return;
};

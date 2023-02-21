//You want to see if two string match, while treating uppercase and 
//lowercase letters as the same

const a = 'hello';
const b = 'HELLO';

if (a.toLowerCase() === b.toLowerCase()){
    console.log('both versions match, regardless of case-sensitive');
} else {
    console.log('not the same');
};

//O se puede utilizar una forma mas funcional con string.localecompare()

const c = 'Oruga';
const d = 'orugA';

if (a.localeCompare(b, undefined, {sensitivity:'accent'}) === 0){
    console.log('both versions match, regardless of case-sensitive');
} else {
    console.log('not the same');
}

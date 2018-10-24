const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const sNames = []
names.forEach(name => {
    if((name.startsWith("S"))){
        sNames.push(name);
    }
})
console.log(sNames);


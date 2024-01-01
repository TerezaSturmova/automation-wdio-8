export const adminName = 'Lišák Admin';
export const adminEmail = 'da-app.admin@czechitas.cz';
export const adminPassword = 'Czechitas123';

export const myName = 'Tereza Šturmová';
export const myEmail = 'ter.sturmova@gmail.com';
export const myPassword = 'Tereza123';

export function getRandomEmail() {
    const id = Date.now()
    return 'ter.sturmova+' + id + '@gmail.com' 
}
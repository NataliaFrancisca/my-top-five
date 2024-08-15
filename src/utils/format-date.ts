const MONTHS = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
  
export function getDateFormatted(){
    const date = new Date();

    const month = date.getMonth();
    const year = date.getFullYear();

    return `${MONTHS[month]} - ${year}`
}


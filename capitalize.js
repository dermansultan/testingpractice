function capitalize(string){
    // first index, uppercase it, remove first index and add new uppercased char
    return string.charAt(0).toUpperCase() + string.slice(1);
}
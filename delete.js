function deleteItem(position) {
    let data = [20, 35, 45, 70, 85, 90];
    // let position=3;
    for (i = position; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    return data
}
console.log(deleteItem(3));
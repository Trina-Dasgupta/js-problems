function merge() {
    let data = [23, 34, 56, 90];
    let data2 = [2, 44, 65, 67, 70];
    let data3 = [];
    //*****One Way not a efficient way ***** */
    // for(i=0;i<data.length;i++){
    //     data3[i]=data[i];

    // }
    // for(i=0;i<data2.length;i++){
    //     data3[data.length+i]=data2[i];
    // }
    // return data3;
    //*****Another One Way ---->  efficient way ***** */
    //This logic will not work for unsorted array
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;
    while (d1 < data.length && d2 < data2.length) {
        if (data[d1] < data2[d2]) {
            data3[d3] = data[d1];
            // d3++;
            d1++;
        } else {
            data3[d3] = data2[d2];
            // d3++;
            d2++;
        }
        d3++;
    }
    while(d1<data.length){
        data3[d3] = data[d1];
        d3++;
        d1++;
    }

    return data3;
}
console.log(merge());
const nth_most_rate = (list, n)=>{
    let count; 
    let rarest;
    count = list.reduce((acc, curr)=> {
        !acc[curr] ? acc[curr] = 1: acc[curr]++;
        return acc
    }, {});

    rarest = Object.values(count).sort()[n - 1];

    for (let item in count){
        if (count[item] == rarest) return item
    };
}
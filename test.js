var data = [
    {a:1,b:5,c:9},
    {a:2,b:6,c:10},
    {a:3,b:7,c:11},
    {a:4,b:8,c:12}
    ];
    let modified = data.map(obj => ({a: obj.a, b: obj.b}))
    //retornamos um objeto. Para cada obj, atribuimos os valores de a e b para 2 keys dentro deste objeto que vamos retornar 
    
    console.log(modified);
    
    // output: 
    // [ { a: 1, b: 5 }, { a: 2, b: 6 }, { a: 3, b: 7 }, { a: 4, b: 8 } ]
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    },1000);
},1000);

//promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random()*2);
    if(rand ==0){
        resolve();
    }
    else{reject();}
});

myPromise
    .then(() => console.log("success"))
    .catch(() => console.error('something went wronggg'));

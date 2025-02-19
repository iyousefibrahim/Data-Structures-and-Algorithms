// Normal for loop
function countDown(num: number) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All Done!");
}
countDown(5);

// With Recursion
function countDownRecursion(num:number){
    if(num === 0){
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDownRecursion(num);
}
countDownRecursion(5);
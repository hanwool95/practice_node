// 파라메트릭 서치.

function solution(n, times) {
    const sortTime = times.sort((a, b) => a - b);
    let left = 1
    let right = sortTime[sortTime.length-1] * n

    while ( left <= right ){
        mid = Math.floor((left + right) / 2);
        const carry = times.reduce((prev, time) => prev + Math.floor(mid/time), 0);

        if ( carry < n ) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }
    return left

}


solution(6, [7, 10])	//28
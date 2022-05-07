function makeTrie(words) {
    const root = {};

    for (const word of words) {
        let current = root;
        for (const letter of word) {
            if (!current[letter]) current[letter] = [0, {}]
            current[letter][0] += 1;
            current = current[letter][1];
        }
    }

    return root;
}


function solution(words) {
    let answer = 0;

    trie = makeTrie(words);

    words
        .forEach((word) => {
            let cur = trie
            for (const letter of word) {
                answer += 1;
                if (cur[letter][0] === 1) break
                cur = cur[letter][1];

            }
        })
    console.log(answer)
    return answer;
}


solution(["go","gone","guild"]) //7
solution(["abc","def","ghi","jklm"])	//4
solution(["word","war","warrior","world"])	//15
function solution(genres, plays) {

    genreTotal = {}
    genreOrder = {}

    let index = 0
    for (const genre of genres ){
        if (!!genreTotal[genre]) {
            genreTotal[genre] += plays[index]
            Object.assign(genreOrder[genre], {[index]: plays[index]})
        }
        else {
            genreTotal[genre] = plays[index]
            genreOrder[genre] = { [index]: plays[index]}
        }

        index += 1
    }

    let answer = [];

    const sortable = Object.entries(genreTotal)
        .sort(([, a], [, b]) => b - a);
        // .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for ( const genre of sortable ) {
        count = 0
        const sortedList = Object.entries(genreOrder[genre[0]])
        .sort(([, a], [, b]) => b - a);

        for ( const indexList of sortedList){
            answer.push(Number(indexList[0]))
            count += 1
            if ( count === 2 ){
                break
            }
        }
    }

    console.log(answer)

    return answer;
}



function solution(genres, plays) {
    const genreMap = new Map();

    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = genreMap.get(genre) || { total: 0, songs: []}
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, index}]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })

    console.log([...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
    )
}


solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])	// [4, 1, 3, 0]
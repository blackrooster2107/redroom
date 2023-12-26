export const capzfirstletters = (w) => {
    let wlist = w.split(' ')
    let words = ''
    for (let i in wlist) {
        wlist[i] = wlist[i][0].toUpperCase() + wlist[i].slice(1)
        words = words + wlist[i] + " "
    }
    words.trim()
    return words
}
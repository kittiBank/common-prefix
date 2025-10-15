function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Mock Data for testing
const testCases = [
    ["flower","flow","flight"],
    ["dog","racecar","car"],
    ["interspecies","interstellar","interstate"],
    ["ab","abc","abcd","abcde"]
];

testCases.forEach((tc, i) => {
    console.log(`Test case ${i+1}:`, longestCommonPrefix(tc));
});

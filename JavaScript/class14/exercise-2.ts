const vowelsCount = (input: string): number => {
    return Array.from(input).reduce((acc, curr) => {
        return ['a', 'e', 'i', 'o', 'u'].includes(curr.toLowerCase()) ? acc + 1 : acc;
    }, 0); // Accumulator is properly initialized here
}

console.log(vowelsCount("aeiousbdkl")); // Output: 5

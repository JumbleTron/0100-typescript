function multiply(a: number, b: number): number;
function multiply(a: string, b: number): string;

function multiply(a: number|string, b: number): number|string {
    if (typeof a === 'string') {
        return (parseInt(a) * b).toString();
    }
    return a * b;
}

const result = multiply('5', 2);
const result2 = multiply(5, 2);


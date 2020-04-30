
async function mul(a, b) {
    if (!+a || !+b) {
        throw new Error('Incorrect input parameters');
    }
    return a * b;
}

async function run() {
    try {
        const result = await mul('asd', 2);
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
}
// code
run().then(() => console.log('done'));
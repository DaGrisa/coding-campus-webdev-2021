type LockStates = "locked" | "unlocked";

function getHelloText(name: string, state: LockStates): string{
    return `Hello ${name}`;
}

console.log(getHelloText('Daniel', "locked"));

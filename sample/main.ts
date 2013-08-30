/// <reference path="./sample.ts" />

class Main {
    constructor(){}

    run(i: number): string {
        var sample = new Sample.Klass();
        return String(sample.square(i));
    }
}

var main = new Main();
var res = main.run(5);
console.log(res);

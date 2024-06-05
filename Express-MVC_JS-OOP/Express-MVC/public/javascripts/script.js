$(document).ready(function() {
    const title = $('#title');
    const button = $('#changeTextButton');

    // RxJS code
    const { from, of, interval } = rxjs;
    const { concatMap, delay, map, takeWhile } = rxjs.operators;

    const array = [1, 2, 3, 4, 5];

    const observer = {
        next: (value) => console.log(value),
        error: (err) => console.error('Error: ', err),
        complete: () => console.log('Completed')
    };

    const observable = from(array).pipe(
        concatMap(value =>
            of(value).pipe(
                delay(1000)
            )
        )
    );

    const observable2 = interval(1000).pipe(
        takeWhile(val => val < array.length),
        map(value => {
            if (value < array.length) {
                return array[value];
            } else {
                observer.complete();
            }
        })
    );

    const subscription = observable2.subscribe(observer);

    // jQuery code
    button.click(function() {
        title.text('Text Changed!');
    });
});
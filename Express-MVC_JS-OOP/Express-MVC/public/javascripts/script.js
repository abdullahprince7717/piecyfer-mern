$(document).ready(function() {
    const title = $('#title');
    const button = $('#btn');
    const input1 = $('#input1');
    const input2 = $('#input2');
    const span = $('#concatText');

    if (typeof rxjs === 'undefined') {
      console.error('RxJS is not loaded');
      return;
  }

    // RxJS code
    const { from, of, interval, fromEvent, mergeMap } = rxjs;
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

    const inputObs1 = fromEvent(input1, "input")
    const inputObs2 = fromEvent(input2, "input")

    // inputObs1.pipe(
    //   // map(event => span.text(event.target.value))
    //   mergeMap(event1 => {
    //     // span.text(event1.target.value)
    //     return inputObs2.pipe(
    //       map(event2 => span.text( event1.target.value + event2.target.value))
    //     )
    //   })
    // ).subscribe(observer);


    // const subscription = observable2.subscribe(observer);

    // jQuery code
    button.click(function() {
        title.text('Text Changed!');
        console.log('Button clicked!');
    });
});



// need to add {{rescheduleUrl}} in template and replace it with the url

function _fillValuesInTemplate(values, messageTemplate, link) {
  const res = values.reduce(function (result, value) {
    return result.replace("%s", value);
  }, messageTemplate);
  return res.replace("{{rescheduleUrl}}", link);
}

let smsTemplateValues = [
  "smsData.name",
  "smsData.date",
  "smsData.time",
  "smsData.rescheduleLink",
];

let smsTemplate = "Hi %s, we noticed you missed your follow-up appointment today at %s. Hope all is well! To avoid a $100 fee, please reschedule with %s using the following link: {{rescheduleUrl}}";

console.log(".....", _fillValuesInTemplate(smsTemplateValues, smsTemplate, "smsData.rescheduleLink"));


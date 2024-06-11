const { from, of, interval } = require('rxjs');
const { concatMap, delay, mapTo, map, takeUntil, takeWhile, take } = require('rxjs/operators');

const array = [1, 2, 3, 4, 5];

// Create an observer function
const observer = {
  next: (value) => console.log(value),
  error: (err) => console.error('Error: ', err),
  complete: () => {
    // console.log('this.........', globalThis)
    console.log('Completed')
    // subscription.unsubscribe();
  }
};

// Create an observable from the array
const observable = from(array).pipe(
  // Use concatMap to map each value to an observable that emits after a delay
  concatMap(value => 
    // Create an observable that emits the value after a 2-second delay
    of(value).pipe(
      delay(1000)
    )
  )
);

const observable2 = interval(1000)
.pipe(
  // take(array.length),
  takeWhile(val => val < array.length),
  // takeUntil(interval(3100)),
  map((value) =>{ 
    if(value < array.length){
      return array[value]
    }
      observer.complete();
    }
  )
)

//MergeMap practice!
// First create a view template  and then create input fields there and
// then use mergeMap to get the value of the input fields and then display the value in the console in service file



// Subscribe to the observable using the observer function

// observable.subscribe(observer);
// const subscription =  observable2.subscribe(observer);


function _fillValuesInTemplate(values, messageTemplate, obj) {
  let res = values.reduce(function (result, value) {
    return result.replace("%s", value);
  }, messageTemplate);

  if(!obj){
    return res;
  }

  // for(key in obj){
  //   res = res.replace(key, obj[key]);
  // }
  Object.entries(obj).forEach((e) => {
    let key = e[0];
    let value = e[1];
  
    // Remove the braces if they exist, clean the key, and add the braces back
    key = key.replace(/^\{\{\s*|\s*\}\}$/g, '').replace(/\s+/g, ' ').trim();
    
    // Create a regex pattern to match {{ key }} with optional spaces around the key
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'ig');
    
    console.log(regex);
    // console.log(smsTemplate.replaceAll(regex, value));
    res = res.replaceAll(regex, value);
  });

  return res
}

let smsTemplateValues = [
  "name",
  "date",
  "time"
];

let obj = { "{{rescheduleURL  }}" : "www.google.com" }
let obj2 = {"{{ test }}" : "www.test.com" }

let smsTemplate = "Hi %s, we noticed you missed your follow-up appointment today at %s. Hope all is well! To avoid a $100 fee, please reschedule with %s using the following link: {{     rescheduleURL   }} . Heres new link test:  {{ test    }}";

console.log(".....", _fillValuesInTemplate(smsTemplateValues, smsTemplate, ));

const str = 'URL: https://millenniummedicalassociates.zoom.us/j/82926748861 \nMeeting ID: 82926748861';

const arr = str.split(' ') 
// console.log(arr[arr.length - 1]);
// console.log('###', str.replace('URL: ', "Hellow"))



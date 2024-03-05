# Uploader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 🪨🚀 Uber Interview Question about Selection Sort Algorithm 🪨🚀

لو احنا عندنا Array وعايزين نعيد ترتيبها باستخدام
Selection Sort Algorithm
================
الحل والشرح📚

// اللي هنرتبها بالكود array دي كدة عبارة عن ال
const numbersArray = [7, 3, 6, 2, 4, 1];

// parameter هنا احنا بندخل
// Array Of Number ودا عبارة عن
function selectionSortAlgorithm(numbers) {
// Array بتمشي علي كل عناصر ال Loop هنا بنعمل
// من اول عنصر لحد العنصر قبل الاخير
for (let i = 0; i < numbers.length - 1; i++) {
// هنا احنا بنعمل فرض ان العنصر دا هيكون اصغر عنصر
let minIndex = i;
// هنا احنا بنعمل innerLoop
// ودي هتمشي ع باقي العناصر وهنفضل نقارن كل العناصر بالعنصر الحالي
for (let j = i + 1; j < numbers.length; j++ ) {
// وفي حالة ان كان فيه عنصر اصغر من العنصر اللي احنا بنعتبره انه اصغر عنصر
if (numbers[j] < numbers[minIndex]) {
// بنبدا نعمل update
// ونخلي قيمة ال minIndex
// تساوي للعنصر الصغير
minIndex = j;
}
}
// هنا استخدمت desctructioring
// علشان نبدا نبدل العناصر بتاعنا ونعيد الترتيب بمعني اصح
[numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
}
// بعد الترتيب ARRAY هنا احنا كدة بنرجع ال
return numbers
}

console.log(selectionSortAlgorithm(numbersArray));

// Output => [ 1, 2, 3, 4, 6, 7 ]

طبعا متنساش لو انت عندك طريقة احسن من دي شاركنا بيها في الكومنتات❤️⚡

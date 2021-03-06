const quiz = [
  {
    question: '氷みつ粒々いちごスタンバイのかけ方は次のうちどれ？',
    answers: [ '１周', '2周', '3周', '4周'],
    correct: '１周'
  }, {
    question: 'ミルクシロップの追加注文の量は３０ｇですがミニスフレ皿に入れる目安は上から何ｃｍ？',
    answers: [ '１ｃｍ', '２ｃｍ', '３ｃｍ', '４ｃｍ'],
    correct: '２ｃｍ'
  }, {
    question: 'メニュー「かき氷みるくいちご」の氷みつイチゴは何ｇ？',
    answers: [ '５０ｇ', '６０ｇ', '４０ｇ', '３０ｇ'],
    correct: '５０ｇ'
  }, {
    question: 'メニュー「かき氷みるく抹茶あずき」のゆであずきは何ｇ？',
    answers: [ '２０ｇ', '３０ｇ', '４０ｇ', '５０ｇ'],
    correct: '４０ｇ'
  }, {
    question: 'では「抹茶粉末」は何ｇ？',
    answers: [ '５ｇ', '４ｇ', '３ｇ', '２ｇ'],
    correct: '２ｇ'
  }, {
    question: 'メニュー「かき氷みるくマンゴー」のマンゴーソースは何ｇ？',
    answers: [ '６０ｇ', '４０ｇ', '３０ｇ', '５０ｇ'],
    correct: '５０ｇ'
  }, {
    question: 'では「ミルクシロップ」は何ｇ？',
    answers: [ '５０ｇ', '６０ｇ', '８０ｇ', '１００ｇ'],
    correct: '８０ｇ'
  }, {
    question: 'メニュー「かき氷みるく金時」のゆであずきは何ｇ？',
    answers: [ '２０ｇ', '３０ｇ', '４０ｇ', '５０ｇ'],
    correct: '４０ｇ'
  
  }, {
    question: 'メニュー「かき氷みるくいちご（大）」の氷みつイチゴは何ｇ？',
    answers: [ '５０ｇ', '６０ｇ', '４０ｇ', '３０ｇ'],
    correct: '６０ｇ'
  }, {
    question: 'では「ミルクシロップ」は何ｇ？',
    answers: [ '３０ｇ', '４０ｇ', '５０ｇ', '６０ｇ'],
    correct: '３０ｇ'
  }
  
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}

console.log('Hello World!');

(()=>{
//ここに記入する
const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');
//大文字で定数
const ACTIVE_CLASS = 'is-active';
const navLen = $nav.length;


//初期化
const init = () => {
  $content[0].style.display = 'block';
};
init();

//クリックイベント
const handleClick = (e) => {
    e.preventDefault();

    console.log('Clicked!');

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav,content全て一旦リセットする
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="'+ targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
};

//全nav要素に対して関数を適応
let index = 0;
while (index < navLen) {
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
}

$nav[0].addEventListener('click', (e) => handleClick(e));
})();
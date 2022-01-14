const total = 10;    //カードの枚数
const isFirst = true;    //1枚目か判定
let card1 = "";    //array_cardsのindex（1枚目）
let card2 = "";    //array_cardsのindex（2枚目）
const array_cards = [1,1,2,2,3,3,4,4,5,5];    //カードに表示する数値を格納する配列

//カードをシャッフル
array_cards.sort(()=> Math.random() - 0.5);

//ulに空のli要素を追加
for(i=0; i < total; i++) {
  $("#card").append("<li></li>");  
}

//li要素をクリックした際の処理
$("#card li").on("click",function(){
  //1枚目の場合は、全li要素のテキストを空にする
  if(isFirst){
    $("#card li").text("");
  }

  //li要素のindexを取得
  var index = $(this).index();
  console.log(index)
  
  //li要素のindexと同じindexであるarray_cards配列の値を表示する
  $(this).text(array_cards[index]);
    
  if(isFirst){
    //１枚目
    card1 = index;
    isFirst = false;
  }else{
    //2枚目
    card2 = index;
    //1枚目と2枚目の値が同じ場合はli要素の背景色を赤にする
    if(array_cards[card1] === array_cards[card2]){
    	$("#card li").eq(card1).css("background-color","red");
      $("#card li").eq(card2).css("background-color","red");
    }
    isFirst = true;    
  }	
});
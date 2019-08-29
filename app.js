// じゃんけんの手をユーザに入力してもらうためのウィンドウを生成します。
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
 while((user_hand != 'グー')&&(user_hand != 'チョキ')&&(user_hand != 'パー')&&(user_hand != null)){
    alert('グー・チョキ・パーのいずれかを入力して下さい');
    user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
 }

// ランダムでじゃんけんの手を作成する関数を呼び出します。
var js_hand = getJShand();
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れます。
var judge = winLose(user_hand, js_hand);
 
// 結果を表示します。
if(user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
 }else{
    alert('またチャレンジしてね')
 }
// ランダムでじゃんけんの手を作成する関数です
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand;
 
    if(js_hand_num == 0){
        hand = "グー";
    }else if(js_hand_num == 1){
        hand = "チョキ";
    }else if(js_hand_num == 2){
        hand = "パー";
    }
 
    return hand;
}
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数です。
function winLose(user, js){
    var winLoseStr;
 
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
 
    return winLoseStr;
}
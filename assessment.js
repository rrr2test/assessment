'use strict';

const usernameinput = document.getElementById('user-name');
const assessmentbutton = document.getElementById('assessment');
const resultdivided = document.getElementById('result-area');
const tweetdivided = document.getElementById('tweet-area');

/**
 * 指定したHTML要素の子要素をすべて削除
 * @param {HTMLElemet} element HTMLの要素
 */
function removeallchildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

assessmentbutton.onclick = () => {
    console.log('ボタン押された～～～～！');
    const username = usernameinput.value;
    if (username.length === 0) {
        return;
    }
    console.log(username);

    removeallchildren(resultdivided);


    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultdivided.appendChild(header);

    const result = assessment(username);
    const paragraph = document.createElement('p');
    paragraph.innerText = result;
    resultdivided.appendChild(paragraph);

    // tweetエリアの作成
    removeallchildren(tweetdivided);

    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetdivided.appendChild(anchor);

    twttr.widgets.load();
}

const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
];

/**
 * 名前の文字列渡すと、診断結果返す
 * @param {string} username ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(username) {
    let sumofcharcode = 0;
    for (let i = 0; i < username.length; i++) {
        sumofcharcode = sumofcharcode + username.charCodeAt(i);
    }
    let index = sumofcharcode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, username);

    return result;
}
console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);

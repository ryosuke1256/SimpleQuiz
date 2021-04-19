const dataset = {
  Game: {
    FF10: [
      {
        question: '主人公の名前は？',
        answers: ['アーロン', 'クラウド', 'ユウナ', 'ティーダ'],
        correct: 'ティーダ',
        explain: [
          'かっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'ヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'シンがいない数年間はなんと呼ばれているか？',
        answers: ['トキ節', ' キイ節', 'ナギ節', 'シン節'],
        correct: 'ナギ節',
        explain: [
          'ナギ節でした！',
          'ナギ節でした！',
          'さすがです！ナギとは日本語で言えば海の無風を表す凪、シンがいない波風の立たない短い平和の期間に由来します',
          'ナギ節でした！',
        ],
      },
      {
        question: 'アルベド語辞書は全何巻？',
        answers: ['23巻', '26巻', '30巻', '47巻'],
        correct: '26巻',
        explain: [
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！',
          'ラヌダベヌ！（さすがです！）',
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！',
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！!',
        ],
      },
      {
        question: 'ジェクト曰く、アーロンの性格は？',
        answers: ['明るい', 'カタブツ野郎', '遊ばなすぎ', 'へなちょこ'],
        correct: 'カタブツ野郎',
        explain: [
          '明るくはないですねｗ',
          'ユウナレスカ戦の回想シーンでジェクトが実際に言っています！',
          '言いそうだけど違いますｗ',
          '言いそうだけど違いますｗ',
        ],
      },
    ],
    メタルギア: [
      {
        question: 'スネークの本名は？',
        answers: ['ディブ', 'デビット', 'デット', 'ディビット'],
        correct: 'ディビット',
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'computerクイズ2',
        answers: ['1.2', '2.2', '3.2', '4.2'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'computerクイズ3',
        answers: ['1.3', '2.3', '3.3', '4.3'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'computerクイズ4',
        answers: ['1.4', '2.4', '3.4', '4.4'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
    ],
  },
  Anime: {
    Kimetu: [
      {
        question: '鬼滅隊が使う刀の名前は？',
        answers: ['斬魄刀', '黒刀・夜', '鏡花水月', '日輪刀'],
        correct: '日輪刀',
        explain: [
          'BLEACHの死神が使う刀ですw',
          'ワンピースの鷹の目のミホークの刀ですw',
          'BLEACHに出てくる対象を誤認させることができる「完全催眠」が使える刀です！',
          '太陽に一番近く一年中日光が射すという陽光山で採取できる原料で作成されます。人食いを行う鬼を、日光以外で倒すことができる唯一の武器です',
        ],
      },
      {
        question: '「水の呼吸」を使う水柱の名前は？',
        answers: ['嘴平 伊之助', '冨岡義勇', '宇髄 天元', '胡蝶 しのぶ'],
        correct: '冨岡義勇',
        explain: [
          '猪突猛進！猪突猛進！',
          '他の柱から嫌われてるらしい。。',
          '派手な人です。',
          'そんなだからみんなに嫌われるんですよ',
        ],
      },
      {
        question: '何故、下弦の鬼は殺されたのか？',
        answers: [
          '強いから',
          '弱いから',
          '作者が下弦の鬼編を書くのがめんどくさくなったから',
          'パワハラ上司無惨の機嫌がたまたま悪かったから',
        ],
        correct: '弱いから',
        explain: [
          'わざと間違えたでしょ笑',
          '簡単すぎたかw',
          '合ってるかもしれないけどそれはなしww',
          '切れたら怖い無惨！',
        ],
      },
      {
        question: '鬼滅隊入隊試験の最終選別が行われた山の名前は？',
        answers: [
          '藤襲山（ふじかさねやま）',
          '那田蜘蛛山（なたぐもやま）',
          '陽光山（ようこうざん）',
          '狭霧山（さぎりやま）',
        ],
        correct: '藤襲山（ふじかさねやま）',
        explain: [
          '鬼が嫌う藤の花が一年中咲いています！',
          '下弦の伍、累がいた山ですね！',
          'この山は一年中陽が差している山で、日輪刀の原料である、猩々緋砂鉄(しょうじょうひさてつ)と猩々緋鉱石(しょうじょうひこうせき)がとれるます！',
          '鬼滅隊入隊試験のために炭治郎が修行した山です、霧が濃く空気がとても薄いです!',
        ],
      },
    ],
    Eva: [
      {
        question: '新劇場版:序',
        answers: ['ザ・ワールド', 'ザ・ビースト', 'コード７７７', 'コード００７'],
        correct: 'ザ・ビースト',
        explain: [
          '残念！ザ・ビーストでした。',
          '流石です！',
          '惜しい！コード７７７はQでアスカが使用しました。',
          '残念！ザ・ビーストでした。',
        ],
      },
      {
        question: '新劇場版:破でマリが使った２号機の裏コードは？',
        answers: ['ザ・ワールド', 'ザ・ビースト', 'コード７７７', 'コード００７'],
        correct: 'ザ・ビースト',
        explain: [
          '残念！ザ・ビーストでした。',
          '流石です！',
          '惜しい！コード７７７はQでアスカが使用しました。',
          '残念！ザ・ビーストでした。',
        ],
      },
      {
        question: 'ミサトさんがよく飲んでいるビールの銘柄はなんでしょう？',
        answers: ['アサヒビール', 'プレモル', 'エビスビール', '黒ラベル'],
        correct: 'エビスビール',
        explain: [
          'キリッとした味わい！',
          'コクのある味わい！',
          '深みのあるどっしりとした味わい！自分もエビス派です（ほとんど飲めないけど）',
          'バランスがいい!',
        ],
      },
      {
        question: 'computerクイズ3',
        answers: ['1.3', '2.3', '3.3', '4.3'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
    ],

    Re: [
      {
        question: '新劇場版:序',
        answers: ['ザ・ワールド', 'ザ・ビースト', 'コード７７７', 'コード００７'],
        correct: 'ザ・ビースト',
        explain: [
          '残念！ザ・ビーストでした。',
          '流石です！',
          '惜しい！コード７７７はQでアスカが使用しました。',
          '残念！ザ・ビーストでした。',
        ],
      },
      {
        question: '新劇場版:破でマリが使った２号機の裏コードは？',
        answers: ['ザ・ワールド', 'ザ・ビースト', 'コード７７７', 'コード００７'],
        correct: 'ザ・ビースト',
        explain: [
          '残念！ザ・ビーストでした。',
          '流石です！',
          '惜しい！コード７７７はQでアスカが使用しました。',
          '残念！ザ・ビーストでした。',
        ],
      },
      {
        question: '何故、下弦の鬼は殺されたのか？',
        answers: ['1.3', '強いから', '弱いから', 'パワハラ上司無惨の期限が悪かったから'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'computerクイズ4',
        answers: ['1.4', '2.4', '3.4', '4.4'],
        explain: [
          'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'FF10のヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
    ],
  },

  Computer: {
    Computer: [
      {
        question:
          '問1 トランスポート層のプロトコルであり、信頼性よりもリアルタイム性が重視される場合に用いられるものはどれか?',
        answers: ['HTTP', 'UDP', 'TCP', 'IP'],
        correct: 'UDP',
        explain: [
          'HTTPはアプリケーション層のプロトコルです',
          'UDPはトランスポート層のプロトコルで信頼性よりも速度を重視したものです',
          'TCPはトランスポート層のプロトコルですが違います',
          'IPはインターネット層のプロトコルです',
        ],
      },
      {
        question:
          'ソフトウェア開発の活動のうち、アジャイル開発においても重視されているリファクタリングはどれか？',
        answers: [
          'ソフトウェアの品質を高めるために、２人のプログラマが協力して、一つのプログラムをコーディングする。',
          '動作するソフトウェアを迅速に開発するために、テストケースを先に設定してから、プログラムをコーディングする。',
          'ソフトウェアの保守性を高めるために、外部仕様を変更することなく、プログラムの内部構造を変更する',
          '利用者からフィードバックを得るために、提供予定のソフトウェアの試作品を早期に作成する',
        ],
        correct: '2.2',
        explain: ['あ', 'い', 'う', 'え'],
      },
      {
        question: 'computerクイズ3',
        answers: ['1.3', '2.3', '3.3', '4.3'],
        correct: '2.3',
        explain: ['か', 'き', 'く', 'け'],
      },
      {
        question: 'computerクイズ4',
        answers: ['1.4', '2.4', '3.4', '4.4'],
        correct: '2.4',
        explain: ['さ', 'し', 'す', 'せ'],
      },
    ],
  },
};

export default dataset;

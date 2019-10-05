Stupiddog さんが公開されている[指定のDIV要素をPDFファイルへ出力する例 (babel等無しに直接実行できる状態) ](https://github.com/jpzukin/electron-sample-print-to-pdf)を Electron 6.0.10 に対応させたブランチです。

# 概要
指定のDIV要素をPDFファイルへ出力する例。  
PDFファイルへ出力処理をメインに、ファイルパス生成などは簡略しています。  
サードパティーのライブラリは、CDNで読み込んでいます(本来はnpmでrequire)。  

# ファイル構成
./  
 +- index.js  
 +- main.html  
 +- main.js     (メイン画面のレンダラープロセス)
 +- worker.html (印刷イメージを作成する画面で実行時は非表示)  
 +- worker.js   (印刷イメージ画面のレンダラープロセス)
 +- package.json  

# 検証環境
Microsoft Windows 10
Electron v6.0.10
materialize 0.98.0  
jQuery 3.1.1  

# ダウンロードと実行
```
$ git clone https://github.com/yasumichi/electron-sample-print-to-pdf.git
$ cd electron-sample-print-to-pdf
$ git checkout -b  for_electron_6 -t origin/for_electron_6
$ npm install
$ npm start
```

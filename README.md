# DDDで自販機を作ってやるです

# How to set up

### TypeScript 入れる
```
npm install -g typescript
```

確認
```
which tsc
```

### やってみる

```sh
% tsc sample/main.ts sample/sample.ts --out compiled/sample.js
# compiled/sample.jsというファイルができる
% node compiled/sample.js
25
# sample/ 以下を読んで色々変えて次の出力を得てみる
% tsc sample/main.ts sample/sample.ts --out compiled/sample.js
% node compiled/sample.js
age : 5, name : Mike, code : Mike005
```

### Webで動作確認したい(予定)
```
ln -s ~/project/path/to/venderMachine/www /some/web/root/of/this/machine/venderMachine
```

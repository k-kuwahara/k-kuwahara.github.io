console.info('valic_check関数のテスト')
console.info('IDの文字数が0以上かつ、Passwordがtest1234だったら正解')
console.info('==========\n\n')

console.info('case1: どちらも空のケース')
if (valid_check() === 'ng1')
   console.log('OK')
else
   console.error('NG')


console.info('case2: どちらも空文字列のケース')
if (valid_check('', '') === 'ng1')
   console.log('OK')
else
   console.error('NG')


console.info('case3: どちらか一方が空のケース')
if (valid_check('hoge') === 'ng1')
   console.log('OK')
else
   console.error('NG')
if (valid_check('', 'test') === 'ng1')
   console.log('OK')
else
   console.error('NG')


console.info('case4: パスワードの正解/不正解のケース')
if (valid_check('hoge', 'test') === 'ng2')
   console.log('OK')
else
   console.error('NG')
if (valid_check('hoge', 'test1234') === 'ok')
   console.log('OK')
else
   console.error('NG')

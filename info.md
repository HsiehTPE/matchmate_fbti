# FBTI Web Quiz 使用说明

## 本地打开方式

不要直接双击 `index.html`。

推荐先在本目录启动一个本地静态服务器，再用浏览器访问：

```powershell
cd C:\Users\26027\Documents\GitHub\MatchMate_game\FBTI\web-quiz
python -m http.server 8080
```

启动后，在浏览器打开：

```text
http://localhost:8080/index.html
```

## 直接进入结果页

可以通过 `result` 参数直接打开指定人格结果页：

```text
http://localhost:8080/index.html?result=TINTIN
```

更多例子：

- `http://localhost:8080/index.html?result=MOU`
- `http://localhost:8080/index.html?result=LEO`
- `http://localhost:8080/index.html?result=DAT-A`
- `http://localhost:8080/index.html?result=8-PE`
- `http://localhost:8080/index.html?result=Z-LATAN`

说明：

- `DAT-A` 区分大小写，建议按角色定义里的原始 code 写

## 直接进入答题页

```text
http://localhost:8080/index.html?panel=quiz
```

## 直接进入指定题目页

可以通过 `question` 参数直接打开指定题目，数字对应页面上显示的题号：

```text
http://localhost:8080/index.html?question=12
```

更多例子：

- `http://localhost:8080/index.html?question=1`
- `http://localhost:8080/index.html?question=2`
- `http://localhost:8080/index.html?question=16`

线上地址格式：

```text
https://hsiehtpe.github.io/matchmate_fbti/?question=12
```

说明：

- `question=12` 会直接进入页面第 12 题，而不是内部题库 id。
- 如果传入超过题目范围的数字，会自动限制到有效范围内。

## 保存结果图案

进入任意结果页后，点击底部 `保存结果图案` 按钮即可下载结果图。

默认下载到浏览器的下载目录，常见位置：

```text
C:\Users\26027\Downloads
```

## 常见问题

### 1. 点击保存结果图案没反应

优先检查是不是直接用 `file://` 打开的页面。

如果是，改用上面的本地服务器方式打开。

### 2. 修改代码后页面没变化

先强制刷新浏览器：

```text
Ctrl + F5
```

如果还不行，就关闭当前页面重新打开。

### 3. 想用线上地址直达某个结果页

线上地址格式：

```text
https://hsiehtpe.github.io/matchmate_fbti/?result=TINTIN
```

例如：

- `https://hsiehtpe.github.io/matchmate_fbti/?result=MOU`
- `https://hsiehtpe.github.io/matchmate_fbti/?result=LEO`
- `https://hsiehtpe.github.io/matchmate_fbti/?result=Z-LATAN`

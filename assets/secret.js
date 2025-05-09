// 保留波纹效果
document.addEventListener("mousemove", function(e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
});

// 加载秘密内容的功能
function loadSecret() {
  // 隐藏首页内容并显示秘密内容
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('secret-content').style.display = 'block';

  // 使用 Fetch API 加载 secret-001.md 内容并展示
  fetch('secrets/secret-001.md')
    .then(response => response.text())
    .then(data => {
      document.getElementById('secret-text').innerHTML = marked(data); // 使用 marked.js 转换 Markdown 为 HTML
    })
    .catch(err => {
      console.error("加载失败：", err);
    });
}

// 生成随机字符串（字母和数字）
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 生成随机的网址并替换
function generateRandomUrl() {
  // 随机生成“美丽”和“很好”
  const randomBeauty = generateRandomString(3); // 生成 3 个字符的随机字符串
  const randomGood = generateRandomString(4); // 生成 4 个字符的随机字符串
  
  // 替换网址中的“美丽”和“很好”，并使用 encodeURIComponent 来确保 URL 编码正确
  const url = `https://${encodeURIComponent(randomBeauty)}.dizhi04.top/${encodeURIComponent(randomGood)}`;
  
  // 设置链接的 href 属性
  const linkElement = document.querySelector('.btn');
  linkElement.href = url;
  
  // 设置链接文本为动态生成的 URL
  linkElement.textContent = `发现更多秘密（跳转到：${url}）`; // 修改链接文本
}

// 等待页面加载完成后执行
window.onload = function() {
  generateRandomUrl(); // 生成并设置随机 URL
};

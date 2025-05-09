// ��������Ч��
document.addEventListener("mousemove", function(e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
});

// �����������ݵĹ���
function loadSecret() {
  // ������ҳ���ݲ���ʾ��������
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('secret-content').style.display = 'block';

  // ʹ�� Fetch API ���� secret-001.md ���ݲ�չʾ
  fetch('secrets/secret-001.md')
    .then(response => response.text())
    .then(data => {
      document.getElementById('secret-text').innerHTML = marked(data); // ʹ�� marked.js ת�� Markdown Ϊ HTML
    })
    .catch(err => {
      console.error("����ʧ�ܣ�", err);
    });
}

// ��������ַ�������ĸ�����֣�
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// �����������ַ���滻
function generateRandomUrl() {
  // ������ɡ��������͡��ܺá�
  const randomBeauty = generateRandomString(3); // ���� 3 ���ַ�������ַ���
  const randomGood = generateRandomString(4); // ���� 4 ���ַ�������ַ���
  
  // �滻��ַ�еġ��������͡��ܺá�����ʹ�� encodeURIComponent ��ȷ�� URL ������ȷ
  const url = `https://${encodeURIComponent(randomBeauty)}.dizhi04.top/${encodeURIComponent(randomGood)}`;
  
  // �������ӵ� href ����
  const linkElement = document.querySelector('.btn');
  linkElement.href = url;
  
  // ���������ı�Ϊ��̬���ɵ� URL
  linkElement.textContent = `���ָ������ܣ���ת����${url}��`; // �޸������ı�
}

// �ȴ�ҳ�������ɺ�ִ��
window.onload = function() {
  generateRandomUrl(); // ���ɲ�������� URL
};

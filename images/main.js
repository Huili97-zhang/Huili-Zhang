// 设置版权年份
document.getElementById('year').textContent = new Date().getFullYear();

// 为外部链接添加图标和新标签页打开
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-external-link-alt';
        icon.style.marginLeft = '5px';
        icon.style.fontSize = '0.8em';
        link.appendChild(icon);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// PDF下载链接跟踪（可选）
document.querySelector('.cv-download').addEventListener('click', function() {
    console.log('CV downloaded at: ' + new Date().toLocaleString());
});

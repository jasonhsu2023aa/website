// 平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表單提交處理
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('感謝您的訊息！我們會盡快回覆。');
    this.reset();
});

// 頁面載入動畫
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = '1';
    }, 100);
});

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: '日月潭導覽',
                    date: '2024-04-04',
                    tags: ['旅遊', '日月潭', '自然景點'],
                    excerpt: '日月潭是台灣最大的淡水湖泊，也是最美麗的高山湖泊之一。這裡不只有優美的自然景觀，更蘊含豐富的原住民文化...'
                },
                {
                    id: 2,
                    title: '日月潭導覽 - 必訪景點',
                    date: '2024-04-03',
                    tags: ['旅遊指南', '景點推薦', '日月潭'],
                    excerpt: '從文武廟到向山遊客中心，從伊達邵到水社碼頭，帶您深入探索日月潭各個迷人景點...'
                },
                {
                    id: 3,
                    title: '日月潭導覽 - 美食推薦',
                    date: '2024-04-02',
                    tags: ['美食', '住宿', '旅遊建議'],
                    excerpt: '想要完整體驗日月潭的魅力，合適的住宿地點和道地美食是不可或缺的。本文為您推薦最佳的美食與住宿選擇...'
                }
            ]
        }
    },
    methods: {
        // 這裡可以添加更多方法
    }
})

app.mount('#app')

document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有「繼續閱讀」按鈕
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    // 為每個按鈕添加點擊事件
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 獲取當前文章卡片
            const article = this.closest('.article-card');
            // 獲取完整內容區域
            const fullContent = article.querySelector('.article-full-content');
            
            // 切換顯示/隱藏
            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                this.innerHTML = '收起內容 <i class="fas fa-arrow-up"></i>';
            } else {
                fullContent.style.display = 'none';
                this.innerHTML = '繼續閱讀 <i class="fas fa-arrow-right"></i>';
            }
        });
    });
}); 
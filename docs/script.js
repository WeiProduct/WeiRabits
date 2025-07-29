
const translations = {
    zh: {
        
        'nav-features': '功能特点',
        'nav-screenshots': '应用截图',
        'nav-download': '下载',
        
        
        'hero-title': '科学养成好习惯',
        'hero-subtitle': '基于《原子习惯》理念，通过身份认同、触发-行动-奖励循环，帮助您建立持久的好习惯',
        'download-appstore': 'App Store 下载',
        'learn-more': '了解更多',
        
        
        'features-title': '强大功能，助您成功',
        'feature-1-title': '身份驱动',
        'feature-1-desc': '基于"我是..."的身份认同，从根本上改变行为模式',
        'feature-2-title': '习惯循环',
        'feature-2-desc': '设置触发器和奖励，构建完整的习惯回路',
        'feature-3-title': '番茄钟',
        'feature-3-desc': '内置番茄钟，专注力与习惯养成完美结合',
        'feature-4-title': '数据分析',
        'feature-4-desc': '可视化追踪进度，智能分析提供改进建议',
        'feature-5-title': '连续记录',
        'feature-5-desc': '激励性的连续天数记录，不断刷新最佳成绩',
        'feature-6-title': '双语支持',
        'feature-6-desc': '中英文界面随时切换，满足不同需求',
        
        
        'screenshots-title': '应用界面展示',
        'screenshot-1': '今日习惯',
        'screenshot-2': '创建习惯',
        'screenshot-3': '数据统计',
        'screenshot-4': '番茄钟',
        
        
        'how-title': '简单三步，开始改变',
        'step-1-title': '定义身份',
        'step-1-desc': '设定"我是..."的身份目标，如"我是一个爱运动的人"',
        'step-2-title': '设计习惯',
        'step-2-desc': '创建习惯，设置触发条件和奖励机制',
        'step-3-title': '持续追踪',
        'step-3-desc': '每日打卡，查看进度，获得成就感',
        
        
        'download-title': '立即开始您的习惯养成之旅',
        'download-subtitle': '完全免费，无广告，注重隐私保护',
        'privacy-policy': '隐私政策',
        'contact': '联系我们',
        
        
        'footer-rights': '保留所有权利。',
        
        
        'app-store-alt': '从 App Store 下载'
    },
    en: {
        
        'nav-features': 'Features',
        'nav-screenshots': 'Screenshots',
        'nav-download': 'Download',
        
        
        'hero-title': 'Build Better Habits',
        'hero-subtitle': 'Based on Atomic Habits methodology, build lasting habits through identity, cue-routine-reward loops',
        'download-appstore': 'Download on App Store',
        'learn-more': 'Learn More',
        
        
        'features-title': 'Powerful Features for Success',
        'feature-1-title': 'Identity-Driven',
        'feature-1-desc': 'Change behaviors fundamentally through "I am..." identity statements',
        'feature-2-title': 'Habit Loop',
        'feature-2-desc': 'Set triggers and rewards to build complete habit loops',
        'feature-3-title': 'Pomodoro Timer',
        'feature-3-desc': 'Built-in Pomodoro timer perfectly combines focus with habit building',
        'feature-4-title': 'Data Analytics',
        'feature-4-desc': 'Visualize progress and get smart suggestions for improvement',
        'feature-5-title': 'Streak Tracking',
        'feature-5-desc': 'Motivating consecutive day tracking to beat your best records',
        'feature-6-title': 'Bilingual Support',
        'feature-6-desc': 'Switch between Chinese and English anytime',
        
        
        'screenshots-title': 'App Interface',
        'screenshot-1': "Today's Habits",
        'screenshot-2': 'Create Habit',
        'screenshot-3': 'Statistics',
        'screenshot-4': 'Pomodoro Timer',
        
        
        'how-title': 'Three Simple Steps to Change',
        'step-1-title': 'Define Identity',
        'step-1-desc': 'Set "I am..." identity goals, like "I am an active person"',
        'step-2-title': 'Design Habits',
        'step-2-desc': 'Create habits with triggers and reward mechanisms',
        'step-3-title': 'Track Progress',
        'step-3-desc': 'Check in daily, view progress, gain achievement',
        
        
        'download-title': 'Start Your Habit Journey Today',
        'download-subtitle': 'Completely free, no ads, privacy-focused',
        'privacy-policy': 'Privacy Policy',
        'contact': 'Contact Us',
        
        
        'footer-rights': 'All rights reserved.',
        
        
        'app-store-alt': 'Download on the App Store'
    }
};


let currentLang = localStorage.getItem('preferredLang') || 'zh';


document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    addSmoothScrolling();
    addScrollEffects();
});


function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('preferredLang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLang][key]) {
            element.alt = translations[currentLang][key];
        }
    });
    
    
    const langZh = document.querySelector('.lang-zh');
    const langEn = document.querySelector('.lang-en');
    if (currentLang === 'zh') {
        langZh.style.display = 'inline';
        langEn.style.display = 'none';
    } else {
        langZh.style.display = 'none';
        langEn.style.display = 'inline';
    }
}


function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function addScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
        
        
        animateOnScroll();
        
        lastScroll = currentScroll;
    });
}


function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .screenshot-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.animationDelay = '0.1s';
        }
    });
}


const carousel = document.querySelector('.screenshots-carousel');
if (carousel) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
}
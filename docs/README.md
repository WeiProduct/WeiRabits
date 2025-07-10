# RHabits Landing Page

这是 RHabits 应用的宣传网站，可以免费托管在 GitHub Pages 上。

## 特点

- 🌐 双语支持（中文/英文）
- 📱 响应式设计，支持手机、平板和桌面
- ⚡ 纯静态网站，加载速度快
- 🎨 现代化设计，符合 iOS 设计规范
- 🔒 包含隐私政策页面

## 文件结构

```
docs/
├── index.html          # 主页
├── privacy-policy.html # 隐私政策页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 交互
├── app-store-badge.svg # App Store 下载徽章
└── README.md          # 本文件
```

## 部署到 GitHub Pages

1. 将这些文件放在仓库的 `docs` 文件夹中
2. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" (或你的主分支)
   - Folder 选择 "/docs"
   - 点击 Save

3. 等待几分钟后，你的网站将在以下地址可用：
   `https://[你的用户名].github.io/[仓库名]/`

## 需要添加的内容

在正式发布前，你需要：

1. **替换截图**：
   - `hero-screenshot.png` - 主页展示的手机截图
   - `screenshot-1.png` - 今日习惯界面
   - `screenshot-2.png` - 创建习惯界面
   - `screenshot-3.png` - 数据统计界面
   - `screenshot-4.png` - 番茄钟界面

2. **更新链接**：
   - 在 `index.html` 中更新 App Store 链接（搜索 `YOUR_APP_ID`）
   - 更新联系邮箱（搜索 `your-email@example.com`）

3. **优化图片**：
   - 确保所有截图都经过压缩优化
   - 建议使用 WebP 格式以获得更好的性能

## 自定义

### 修改颜色主题

在 `styles.css` 文件的 `:root` 部分修改 CSS 变量：

```css
:root {
    --primary-color: #007AFF;  /* 主色调 */
    --secondary-color: #5AC8FA; /* 辅助色 */
    /* ... */
}
```

### 添加新的语言

在 `script.js` 的 `translations` 对象中添加新语言：

```javascript
const translations = {
    zh: { ... },
    en: { ... },
    ja: {  // 日语示例
        'nav-features': '機能',
        // ...
    }
};
```

## 性能优化建议

1. 使用图片 CDN 服务（如 Cloudinary）来优化图片加载
2. 启用 GitHub Pages 的 HTTPS
3. 考虑添加 PWA 支持以提供更好的移动体验

## 许可证

此网站模板随 RHabits 项目一同发布。
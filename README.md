# Twilight State Navigation Site

Twilight State 官方导航站，具有几何光效渲染风格和 AIGC 美学。

## 🚀 部署到 Netlify

本项目已经过优化，可以直接部署到 Netlify。

### 方法 1：通过 Netlify UI (推荐)

1. 将代码推送到 GitHub/GitLab/Bitbucket。
2. 登录 [Netlify](https://app.netlify.com/)。
3. 点击 **"Add new site"** -> **"Import an existing project"**。
4. 选择你的代码库。
5. Netlify 会自动识别 Vite 配置：
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
6. 点击 **"Deploy site"** 即可。

### 方法 2：使用 Netlify CLI

1. 安装 CLI: `npm install -g netlify-cli`
2. 登录: `ntl login`
3. 构建项目: `npm run build`
4. 部署: `ntl deploy --prod --dir=dist`

## 🛠 技术栈

- **React + TypeScript**
- **Vite** (构建工具)
- **Tailwind CSS** (样式)
- **Three.js / React Three Fiber** (3D 几何背景)
- **Framer Motion** (交互动画)
- **Lucide React** (图标)

## 🎨 视觉特性

- 丁达尔光效视觉模拟
- 暖色日落几何背景
- AIGC 现代简约风格
- 隐藏的 Chomik 彩蛋 (点击右下角 3 次触发)

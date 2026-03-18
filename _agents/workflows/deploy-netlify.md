---
description: Deployment guide for Netlify
---

### **How to Deploy your Portfolio to Netlify**

Follow these steps to get your 3D portfolio live on the web:

#### **Method 1: Continuous Deployment (Recommended)**
This is the best way to keep your site updated automatically whenever you push changes to your code.

1.  **Push your code to GitHub**:
    - Create a new repository on [GitHub](https://github.com).
    - Initialize git and push your local code:
      ```bash
      git init
      git add .
      git commit -m "Initial portfolio commit"
      git remote add origin YOUR_REPO_URL
      git push -u origin main
      ```

2.  **Connect to Netlify**:
    - Log in to your [Netlify](https://app.netlify.com/) account.
    - Click **"Add new site"** and select **"Import an existing project"**.
    - Choose **GitHub** and authorize Netlify.
    - Select your portfolio repository.

3.  **Configure Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `.next`
    - Netlify usually detects Next.js and sets these automatically.

4.  **Deploy**:
    - Click **"Deploy [Site Name]"**.
    - Your site will be live in a few minutes!

---

#### **Method 2: Manual Drag-and-Drop**
Use this if you don't want to use GitHub.

1.  **Build your project locally**:
    - Run the command: `npm run build`
    - This will generate a `.next` folder (for dynamic apps) or an `out` folder (for static apps).
    - *Note: For Netlify drag-and-drop, it's often easier to export as a static site. Update `next.config.mjs` with `output: 'export'` if you choose this method.*

2.  **Upload to Netlify**:
    - Go to the **Sites** tab in Netlify.
    - Drag your build folder (usually `out` if exported) onto the deploy area.

---

### **Important Tips**
- **Environment Variables**: If you add a contact form service (like EmailJS), remember to add your API keys in Netlify's **Site settings > Environment variables**.
- **Custom Domain**: You can connect a custom domain (like `ashishpanwar.com`) easily in the **Domain management** section.

# GitHub Repository Setup Instructions

Follow these steps to create a remote repository and push your code:

## 1. Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Give your repository a name (e.g., "metatheater-landing")
4. Make sure to leave the "Initialize this repository with a README" option unchecked since we already have our files
5. Click "Create repository"

## 2. Push Your Local Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd "/Users/igorkonovalcik/Library/Mobile Documents/com~apple~CloudDocs/Documents/metatheater"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

## 3. Deploy to Vercel

Once your code is on GitHub, you can easily deploy to Vercel:

1. Go to [vercel.com](https://vercel.com) and sign up or log in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project and configure the build settings
5. Click "Deploy" and your site will be live!

The build settings Vercel should automatically detect:
- Build Command: `npm run build`
- Output Directory: `build` (as configured in vite.config.ts)
- Install Command: `npm install`
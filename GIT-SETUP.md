# Setup Git Repository

## Install Git (if not installed)

Download and install Git from: https://git-scm.com/download/win

## Initialize Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Build Me video editor portfolio with glassmorphism design"

# Create main branch (if needed)
git branch -M main
```

## Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `build-me-portfolio`
3. Don't initialize with README (we already have one)

## Connect to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/build-me-portfolio.git

# Push to GitHub
git push -u origin main
```

## Alternative: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select E:\PORTFOLIO folder
5. Publish repository to GitHub

## Quick Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

## .gitignore

Already configured to ignore:
- node_modules/
- dist/
- .env files
- IDE settings

## Recommended First Commits

```bash
git commit -m "feat: add glassmorphism portfolio design"
git commit -m "feat: add professional services and testimonials"
git commit -m "feat: add contact form and portfolio gallery"
git commit -m "style: enhance glassmorphism effects and animations"
```

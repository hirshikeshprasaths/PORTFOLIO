@echo off
setlocal enabledelayedexpansion
set "PATH=C:\Program Files\Git\cmd;%PATH%"

echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Build Me portfolio with glassmorphism design"

echo Setting main branch...
git branch -M main

echo Adding remote repository...
git remote add origin https://github.com/hirshikeshprasaths/PORTFOLIO.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo ✓ Repository created successfully!
echo Your portfolio is now on GitHub: https://github.com/hirshikeshprasaths/PORTFOLIO
echo.
pause

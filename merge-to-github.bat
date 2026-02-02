@echo off
setlocal enabledelayedexpansion
set "PATH=C:\Program Files\Git\cmd;%PATH%"

cd /d "E:\PORTFOLIO\PORTFOLIO-main\PORTFOLIO-main"

echo Checking if Git is initialized...
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git branch -M main
)

echo Staging all files...
git add .

echo Creating commit...
git commit -m "Update: Glassmorphism portfolio with contact details - 24ec031@psr.edu.in, +91 9363869747, Chennai"

echo Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/hirshikeshprasaths/PORTFOLIO.git

echo Pushing to GitHub (force update)...
git push -f origin main

echo.
echo ✓ Successfully merged to GitHub!
echo Repository: https://github.com/hirshikeshprasaths/PORTFOLIO
echo.
pause

@echo off
title VAXINXBOT PUSH PROTOCOL

color 0A

echo.
echo ============================================
echo        VAXINXBOT PUSH PROTOCOL
echo ============================================
echo.
echo Learning by building, documenting, and shipping.
echo.

git status

echo.
set /p msg=Commit Message:

echo.
echo [1/4] Adding files...
git add .

echo.
echo [2/4] Creating commit...
git commit -m "%msg%"

echo.
echo [3/4] Pushing to GitHub...
git push origin main

echo.
echo [4/4] Opening repository...
start https://github.com/regislara-byte/VAXINXBOT-CS50-ENGINEERING-VAULT

echo.
echo ============================================
echo             PUSH COMPLETE
echo ============================================
echo.

pause

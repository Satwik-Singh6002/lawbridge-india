@echo off
title ADHIKAR LawBridge - Java Spring Boot Backend
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0run.ps1"
if %ERRORLEVEL% neq 0 (
    echo.
    echo Server exited with an error code.
    pause
)

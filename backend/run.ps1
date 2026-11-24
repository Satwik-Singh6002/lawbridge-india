# ADHIKAR LawBridge India - Bulletproof Spring Boot Runner
# Automatically locates real JDK, configures JAVA_HOME and PATH, and starts the server

$BackendDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $BackendDir) { $BackendDir = (Get-Location).Path }
Set-Location $BackendDir

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  ADHIKAR LawBridge - Java Spring Boot    " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Discover Real Java JDK Home
$jdkHome = $null

# Option A: Check existing JAVA_HOME if valid
if ($env:JAVA_HOME -and (Test-Path (Join-Path $env:JAVA_HOME "bin\java.exe"))) {
    $jdkHome = $env:JAVA_HOME
}

# Option B: Search standard JDK directories
if (-not $jdkHome) {
    $searchPaths = @(
        "C:\Program Files\Java\latest",
        "C:\Program Files\Java\jdk-25*",
        "C:\Program Files\Java\jdk-26*",
        "C:\Program Files\Java\jdk*",
        "C:\Program Files\Eclipse Adoptium\jdk*",
        "C:\Program Files\Microsoft\jdk*",
        "C:\Program Files\Amazon Corretto\jdk*"
    )
    
    foreach ($pattern in $searchPaths) {
        $found = Get-Item $pattern -ErrorAction SilentlyContinue | Sort-Object Name -Descending | Select-Object -First 1
        if ($found -and (Test-Path (Join-Path $found.FullName "bin\java.exe"))) {
            $jdkHome = $found.FullName
            break
        }
    }
}

# Option C: Check java in PATH (excluding the Oracle Common Files shim)
if (-not $jdkHome) {
    $javaCmd = Get-Command java.exe -ErrorAction SilentlyContinue
    if ($javaCmd) {
        $parent = Split-Path -Parent $javaCmd.Source
        if ($parent -notmatch "Common Files") {
            $candidate = Split-Path -Parent $parent
            if (Test-Path (Join-Path $candidate "bin\java.exe")) {
                $jdkHome = $candidate
            }
        }
    }
}

if ($jdkHome) {
    $env:JAVA_HOME = $jdkHome
    $env:PATH = "$jdkHome\bin;$env:PATH"
    Write-Host "[OK] Real Java JDK found: $jdkHome" -ForegroundColor Green
    $javaVer = & "$jdkHome\bin\java.exe" -version 2>&1 | Select-Object -First 1
    Write-Host "[OK] $javaVer" -ForegroundColor Gray
} else {
    Write-Host "[ERROR] No valid Java JDK installation found." -ForegroundColor Red
    Write-Host "Please ensure Java JDK 17+ is installed in 'C:\Program Files\Java\'" -ForegroundColor Yellow
    exit 1
}

# 2. Check or use Portable Maven
$mvnExecutable = $null
$localMavenBin = Join-Path $BackendDir ".maven\apache-maven-3.9.9\bin\mvn.cmd"

if (Test-Path $localMavenBin) {
    $mvnExecutable = $localMavenBin
    $env:PATH = "$BackendDir\.maven\apache-maven-3.9.9\bin;$env:PATH"
    Write-Host "[OK] Using portable Maven: $localMavenBin" -ForegroundColor Green
} else {
    $sysMvn = Get-Command mvn -ErrorAction SilentlyContinue
    if ($sysMvn) {
        $mvnExecutable = "mvn"
        Write-Host "[OK] Using system Maven from PATH" -ForegroundColor Green
    } else {
        Write-Host "`n[INFO] Downloading portable Apache Maven 3.9.9..." -ForegroundColor Yellow
        $mavenDir = Join-Path $BackendDir ".maven"
        $zipPath = Join-Path $BackendDir "maven-temp.zip"
        
        if (-not (Test-Path $mavenDir)) {
            New-Item -ItemType Directory -Path $mavenDir | Out-Null
        }
        
        $downloadUrl = "https://archive.apache.org/dist/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.zip"
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath
        
        Write-Host "[INFO] Extracting Maven..." -ForegroundColor Yellow
        Expand-Archive -Path $zipPath -DestinationPath $mavenDir -Force
        Remove-Item $zipPath -Force
        
        $mvnExecutable = $localMavenBin
        $env:PATH = "$BackendDir\.maven\apache-maven-3.9.9\bin;$env:PATH"
        Write-Host "[OK] Portable Maven installed successfully!" -ForegroundColor Green
    }
}

Write-Host "`n[INFO] ADHIKAR LawBridge Backend starting on http://localhost:8080..." -ForegroundColor Cyan
Write-Host "[INFO] Press Ctrl+C at any time to stop the server.`n" -ForegroundColor Gray

& $mvnExecutable spring-boot:run

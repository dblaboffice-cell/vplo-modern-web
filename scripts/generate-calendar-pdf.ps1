$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$generatorPath = Join-Path $PSScriptRoot 'generate-calendar-pdf.py'
$python = Get-Command python -ErrorAction SilentlyContinue

if ($null -eq $python) {
    $codexRuntime = Get-ChildItem "$env:USERPROFILE\.cache\codex-runtimes" -Filter python.exe -Recurse -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -like '*codex-primary-runtime*\dependencies\python\python.exe' } |
        Select-Object -First 1
    if ($null -ne $codexRuntime) {
        $python = [pscustomobject]@{ Source = $codexRuntime.FullName }
    }
}

if ($null -eq $python) {
    throw 'Python was not found. Install Python with python-docx and reportlab, then run this command again.'
}

& $python.Source $generatorPath
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

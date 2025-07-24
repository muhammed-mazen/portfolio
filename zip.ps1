# Requires 7z.exe in PATH or same folder
$projectName = "wosom"
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$zipFile = "$projectName-$timestamp.zip"

# Patterns to exclude
$exclude = @(
    "venv",
    ".venv",
    "__pycache__",
    ".git",
    "node_modules",
    ".turbo",
    ".next",
    "build",
    "dist"
)

# Convert to 7z exclude format: -xr!pattern
$excludeArgs = $exclude | ForEach-Object { "-xr!$_" }

# Zip it
& 7z a $zipFile "." @excludeArgs

Write-Host "`n✔ Zipped as: $zipFile"

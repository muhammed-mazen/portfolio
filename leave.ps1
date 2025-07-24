$excludeDirs = @("node_modules", ".git", ".next",  "build", "coverage", ".turbo", ".cache", ".output")
$outputFile = "tree.txt"

# Clear previous output
if (Test-Path $outputFile) {
    Remove-Item $outputFile
}

function Write-Tree {
    param (
        [string]$Path,
        [int]$Depth = 0
    )

    $indent = "│   " * $Depth

    # Directories (excluding junk)
    Get-ChildItem -Path $Path -Directory -Force | Where-Object {
        $excludeDirs -notcontains $_.Name
    } | ForEach-Object {
        Add-Content -Path $outputFile -Value "$indent├── 📁 $($_.Name)"
        Write-Tree -Path $_.FullName -Depth ($Depth + 1)
    }

    # Files
    Get-ChildItem -Path $Path -File -Force | ForEach-Object {
        Add-Content -Path $outputFile -Value "$indent├── 📄 $($_.Name)"
    }
}

Write-Tree -Path (Get-Location)
Write-Host "Tree written to tree.txt"

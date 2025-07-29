# Basic character corruption fix script
# This script uses simple string replacement

param(
    [switch]$DryRun = $false
)

Write-Host "Starting basic character corruption fix" -ForegroundColor Yellow

# Get all TSX files in chains directory
$files = Get-ChildItem -Path "src\app\chains" -Filter "*.tsx" -Recurse

Write-Host "Found $($files.Count) files to process" -ForegroundColor Cyan

$modifiedCount = 0

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)" -ForegroundColor Green
    
    try {
        # Read file content
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        
        # Apply basic fixes - most common patterns first
        $content = $content -replace 'ぁE', 'き'
        $content = $content -replace '安宁E', '安安'
        $content = $content -replace 'ぢめE', 'ぢゅう'
        $content = $content -replace '放るもめE', '放るもの'
        $content = $content -replace 'ビッグエコE', 'ビッグエコー'
        $content = $content -replace 'カレーE', 'カレー'
        $content = $content -replace '銀だぁE', '銀だこ'
        
        # Check if any changes were made
        if ($content -ne $originalContent) {
            $modifiedCount++
            Write-Host "  Modified: $($file.Name)" -ForegroundColor Yellow
            
            if (-not $DryRun) {
                # Save the file with UTF8 encoding (no BOM)
                $utf8NoBom = New-Object System.Text.UTF8Encoding $false
                [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
                Write-Host "  Saved: $($file.Name)" -ForegroundColor Green
            }
        } else {
            Write-Host "  No changes: $($file.Name)" -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "  Error processing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nProcessing completed" -ForegroundColor Green
Write-Host "Files processed: $($files.Count)" -ForegroundColor Cyan
Write-Host "Files modified: $modifiedCount" -ForegroundColor Yellow

if ($DryRun) {
    Write-Host "DRY RUN - No files were actually modified" -ForegroundColor Magenta
    Write-Host "Run without -DryRun to apply changes" -ForegroundColor Magenta
}

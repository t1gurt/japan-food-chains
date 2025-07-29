# Character Corruption Bulk Fix Script
# Charset: UTF-8

param(
    [switch]$DryRun = $false,
    [string]$TargetPath = "src\app\chains"
)

Write-Host "Character corruption bulk fix script started" -ForegroundColor Yellow
Write-Host "Target Path: $TargetPath" -ForegroundColor Cyan
if ($DryRun) {
    Write-Host "DRY RUN mode - no actual changes will be made" -ForegroundColor Magenta
}

# Fix patterns definition
$patterns = @{
    # Basic patterns (high frequency)
    'ぁE' = 'き'
    '丁E��' = 'ー'
    'ぢめE��' = 'ぢゅう'
    'ぢめE' = 'ぢゅう'
    '安宁E' = '安安'
    '放るもめE' = '放るもの'
    'ビッグエコE' = 'ビッグエコー'
    'カレーE' = 'カレー'
    '⭁E' = '★'
    '部位�E' = '部位分け'
    '♻�E' = '♻️'
    '�E�' = '🏮'
    'ↁE' = '→'
    '🍽�E' = '🍽️'
    
    # Chain store names (discovered from chains/page.tsx)
    'CoCo壱番屁E' = 'CoCo壱番屋'
    'ドムドムハンバ�Eガー' = 'ドムドムハンバーガー'
    'ドトールコーヒ�E' = 'ドトールコーヒー'
    'フレチE��ュネスバ�Eガー' = 'フレッシュネスバーガー'
    '富士そ�E' = '富士そば'
    '銀だぁE' = '銀だこ'
    '餁E���E王封E' = '餃子の王将'
    '星乁E��琲庁E' = '星乃珈琲店'
    'ぁE��なりスチE�Eキ' = 'いきなりステーキ'
    '串カチE��中' = '串カツ田中'
    'ロチE��リア' = 'ロッテリア'
    'モスバ�Eガー' = 'モスバーガー'
    'めE��ぁE��E' = 'やよい軒'
    'めE��太郁E' = 'ゆで太郎'
    'ぼてぢめE��' = 'ぼてぢゅう'
    
    # Complex corruption patterns
    'チE��' = 'ッ'
    '乁E��' = '乃'
    '�Eガー' = 'ーガー'
    'ぁE��' = 'い'
    'めE��' = 'ゆ'
    
    # Additional common patterns
    'バ�E' = 'バー'
    'コーヒ�E' = 'コーヒー'
    'そ�E' = 'そば'
    'だぁE' = 'だこ'
}

# Statistics variables
$totalFiles = 0
$modifiedFiles = 0
$totalReplacements = 0

# File processing function
function Process-File {
    param([string]$FilePath)
    
    $script:totalFiles++
    Write-Host "Processing: $FilePath" -ForegroundColor Green
    
    try {
        # Read with UTF8 (no BOM)
        $content = Get-Content -Path $FilePath -Raw -Encoding UTF8
        $originalContent = $content
        $fileReplacements = 0
        
        # Pattern matching and replacement
        foreach ($pattern in $patterns.GetEnumerator()) {
            $oldValue = $pattern.Key
            $newValue = $pattern.Value
            
            # Handle special characters that need escaping
            $escaped = [regex]::Escape($oldValue)
            $matches = [regex]::Matches($content, $escaped)
            
            if ($matches.Count -gt 0) {
                Write-Host "  Found '$oldValue' -> '$newValue' ($($matches.Count) times)" -ForegroundColor Yellow
                $content = $content -replace $escaped, $newValue
                $fileReplacements += $matches.Count
                $script:totalReplacements += $matches.Count
            }
        }
        
        # Update file only if there are changes
        if ($content -ne $originalContent) {
            $script:modifiedFiles++
            Write-Host "  Modified: $fileReplacements replacements" -ForegroundColor Green
            
            if (-not $DryRun) {
                # Save as UTF8 (no BOM)
                $utf8NoBom = New-Object System.Text.UTF8Encoding $false
                [System.IO.File]::WriteAllText($FilePath, $content, $utf8NoBom)
            }
        } else {
            Write-Host "  No changes needed" -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "  Error processing file: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Main processing
Write-Host "`nSearching for files..." -ForegroundColor Cyan

# Get target files
$files = Get-ChildItem -Path $TargetPath -Filter "*.tsx" -Recurse | Where-Object { -not $_.PSIsContainer }

Write-Host "Found $($files.Count) TypeScript React files" -ForegroundColor Cyan
Write-Host "`nStarting processing..." -ForegroundColor Yellow

# Process each file
foreach ($file in $files) {
    Process-File -FilePath $file.FullName
}

# Results summary
Write-Host "`nProcessing completed summary" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host "Target files: $totalFiles" -ForegroundColor White
Write-Host "Modified files: $modifiedFiles" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Cyan
Write-Host "DryRun mode: $DryRun" -ForegroundColor Magenta

if ($DryRun) {
    Write-Host "`nThis was a DryRun. No actual changes were made." -ForegroundColor Yellow
    Write-Host "To perform actual fixes, remove the -DryRun parameter." -ForegroundColor Yellow
} else {
    Write-Host "`nFixes completed. Please run build test." -ForegroundColor Green
}

Write-Host "`nScript finished" -ForegroundColor Yellow

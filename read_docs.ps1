Add-Type -AssemblyName System.IO.Compression.FileSystem

$files = @(
    'OMP Exec - OMP Deals.docx',
    'What is OfferUp - OMP Deals.docx',
    'Verified Auto Dealers Program - OMP Deals.docx',
    'Nationwide Auto Dealer Program - OMP Deals.docx'
)
$baseDir = 'c:\Users\bc\Desktop\OAL-Loan-Marketplace\all-documents-files'

foreach ($f in $files) {
    Write-Host "=================================================="
    Write-Host "FILE: $f"
    Write-Host "=================================================="
    $fullPath = Join-Path $baseDir $f
    if (Test-Path $fullPath) {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($fullPath)
        $entry = $zip.GetEntry('word/document.xml')
        if ($entry) {
            $stream = $entry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xmlContent = $reader.ReadToEnd()
            $reader.Close()
            $stream.Close()
            
            [xml]$xml = $xmlContent
            $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
            $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
            
            $paragraphs = $xml.SelectNodes('//w:p', $ns)
            foreach ($p in $paragraphs) {
                $texts = $p.SelectNodes('.//w:t', $ns)
                $line = ''
                foreach ($t in $texts) { $line += $t.InnerText }
                if ($line.Trim()) { Write-Host $line }
            }
        }
        $zip.Dispose()
    } else {
        Write-Host "File not found: $fullPath"
    }
}

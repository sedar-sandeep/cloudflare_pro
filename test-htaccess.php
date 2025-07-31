<?php
echo "<h2>Testing .htaccess Configuration</h2>";

// Check if mod_rewrite is enabled
if (function_exists('apache_get_modules')) {
    $modules = apache_get_modules();
    echo "<p><strong>mod_rewrite enabled:</strong> " . (in_array('mod_rewrite', $modules) ? 'YES' : 'NO') . "</p>";
    echo "<p><strong>mod_headers enabled:</strong> " . (in_array('mod_headers', $modules) ? 'YES' : 'NO') . "</p>";
    echo "<p><strong>mod_mime enabled:</strong> " . (in_array('mod_mime', $modules) ? 'YES' : 'NO') . "</p>";
} else {
    echo "<p><strong>mod_rewrite check:</strong> Cannot determine (function not available)</p>";
}

// Check if .htaccess is being read
echo "<p><strong>.htaccess file exists:</strong> " . (file_exists('.htaccess') ? 'YES' : 'NO') . "</p>";

// Test image headers
$testUrl = 'https://oci.sedarshop.com/uploads/100001/lifestyle/1694851363_36182a906bb2175a7bd9.webp';
$headers = get_headers($testUrl, 1);

echo "<h3>Test Image Headers:</h3>";
echo "<p><strong>URL:</strong> $testUrl</p>";
if ($headers) {
    echo "<p><strong>Content-Type:</strong> " . ($headers['Content-Type'] ?? 'Not set') . "</p>";
    echo "<p><strong>Content-Disposition:</strong> " . ($headers['Content-Disposition'] ?? 'Not set') . "</p>";
} else {
    echo "<p><strong>Headers:</strong> Could not fetch headers</p>";
}

echo "<h3>All Headers:</h3>";
echo "<pre>";
print_r($headers);
echo "</pre>";

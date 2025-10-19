<?php
// Trader Route ilan kaydetme sistemi
$file = __DIR__ . '/data/Requests.json';

// Formdan gelen JSON verisini al
$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!$data) { http_response_code(400); exit('Invalid JSON'); }

// Mevcut ilanları oku
$existing = [];
if (file_exists($file)) {
  $existing = json_decode(file_get_contents($file), true);
  if (!is_array($existing)) $existing = [];
}

// Yeni ilan için id ve tarih üret
$maxId = 0;
foreach ($existing as $r) {
  if (isset($r['id']) && is_numeric($r['id'])) $maxId = max($maxId, (int)$r['id']);
}
$data['id'] = $maxId + 1;
$data['date'] = gmdate('Y-m-d');
$data['approved'] = true;

// Yeni ilanı ekle
$existing[] = $data;

// JSON dosyasını güncelle
file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Yanıt gönder
header('Content-Type: application/json');
echo json_encode(['ok' => true, 'message' => 'Saved successfully']);
?>

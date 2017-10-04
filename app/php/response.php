<?PHP
$queryParam = htmlspecialchars($_GET["q"]);
require_once('./archivewalker.php');
$archiveWalker = new ArchiveWalker();
$data = $archiveWalker->finder('../../storage/archivewalker', $queryParam);
header('Content-Type: application/json');
echo json_encode($data);

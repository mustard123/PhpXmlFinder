<?php
class ArchiveWalker{

    function getDirectories(string $directory){
        $directories = array_map(function($filename) use($directory){
            if(is_dir($directory . "/" .$filename) && $filename !='.' && $filename !='..'){                 
                return $directory . "/" .$filename;}
        },scandir($directory));

        return $directories;   
    }

    function searchXml(array $directories, string $examNumber){
        $result = [];
        if(strlen($examNumber)!=5){
            return $result;
        }
        $queryString = "//document[field/@value=\"{$examNumber}\"]";
        for($i = 0; $i < count($directories); $i++ ){
            $filePath = $directories[$i] . '/'. 'DocumentIndex.xml';
            if(file_exists($filePath)){
                $doc = new DOMDocument();
                $doc->load($filePath);
                $xpath = new DOMXpath($doc);
                $elements = $xpath->query($queryString);
                
                //for each document node, push an associative array into the result array
                if (!is_null($elements)) {
                    foreach ($elements as $element) {
                        $temp = [];
                        $fields = $element->getElementsByTagName("field");
                        foreach($fields as $field){
                            preg_match('/([A-Z]\w+).+?(?=\/)/', $filePath, $matches);
                            $temp['examName'] = $matches[0];

                            if ($field->getAttribute("name")=="Document ID"){
                                $_id=$field->getAttribute("value");
                                $temp['docID'] = $_id;
                            }
                            
                      }
                      array_push($result, $temp);
                    }
                }
            }

        }
        return $result;
    }

    function finder(String $direcotory, $examNumber){
        return $this->searchXml($this->getDirectories($direcotory), $examNumber);

    }
}
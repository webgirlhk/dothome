<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>if문</title>
</head>
<body>
	<?php
		$music = 'dream lights';

		if($music == 'dream lights'){
			echo "당신이 좋아하는 음악은 dream lights입니다. <br>";
		} else {
			echo "당신이 좋아하는 음악은 dream lights가 아닙니다... <br>";
		}

		$data = "데이터 형";

		if(gettype($data) == 'string'){
			echo "데이터형은 문자열입니다. <br>";
		}else if(gettype($data) == 'interger'){
			echo "데이터형은 정수형입니다. <br>";
		} else {
			echo "데이터형은 정수형도 문자열도 아닙니다.";
		}
	?>
</body>
</html>
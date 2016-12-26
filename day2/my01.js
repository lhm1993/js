function test(n) {

	if(n>3){
		test(--n) ;
	}
	document.writeln(n) ;
}

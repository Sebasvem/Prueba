QUnit.test("funciones basicas",function(assert){
	var lista = "1,2,3,4,5";
	assert.equal( addList(lista),"Good","The list is correct");
	assert.equal( addList("1,2,-3"),"Bad","The list is not correct");
});
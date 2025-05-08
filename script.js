//your JS code here. If required.
const selectColor=document.querySelector("#colorSelect");
document.querySelector('input[type="button"]').addEventListener('click',()=>{
	const selectOption=selectColor.options[selectColor.selectedIndex];
	selectColor.removeChild(selectOption);
});
var canvas_footer_elem=document.getElementById("footer-canvas");
var canvas_foot=canvas_footer_elem.getContext("2d");
canvas_foot.beginPath();
canvas_foot.moveTo(0,0);
canvas_foot.lineTo(1200,200);
canvas_foot.lineTo(0,200);
canvas_foot.closePath();
canvas_foot.fillStyle="#5694c3";
canvas_foot.fill();

<script>
var script = document.querySelector('#utagData');
var data = JSON.parse(script.innerHTML);

window.dataLayer = window.dataLayer || [];

window.dataLayer.push(data);
</script>

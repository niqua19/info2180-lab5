window.onload = function() {
    document.getElementById('lookup').addEventListener('click', function() {
       
        var country = document.getElementById('country').value;
        
        var url = 'world.php';
        if (country) {
            url += '?country=' + encodeURIComponent(country);
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
               document.getElementById('result').innerHTML = this.responseText;
            }
        };
        xhr.open('GET', url);

        xhr.send();
    });
};


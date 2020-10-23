//document.querySelector('next').addEventListener('click', next);

function next() {
    console.log("Hola");
}

function getAll() {
    const call = new XMLHttpRequest();
    call.open('GET', '../data/banner.json', true);
    call.send();
    call.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            let res = document.querySelector('#contend-banner')
            res.innerHTML = '';
            var i = 0;
            console.log(data);

            res.innerHTML = `
                    <img src="${data[0].img}" class="d-block w-100" alt="Imagen Banner">
                    <div class="carousel-caption d-none d-md-block text-center">
                        <div class="float-left text-left col-6">
                            <h2 class="text-uppercase">${data[0].title}</h2>
                            <p class="text-justify">${data[0].description}</p>
                            <a class="btn btn-warning">WHATCH NOW</a>
                            <a class="btn btn-outline-secondary">MORE INFO</a>
                        </div>
                    </div>
                `
                //console.log(item);
                //break;

        }
    }
}
getAll();

/*
<img src="./assets/images/banners/banner-aquaman.jpg" class="d-block w-100" alt="Banner acuaman">
<div class="carousel-caption d-none d-md-block">
    <h5>First slide label</h5>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <button>Hola</button>
</div>
*/
/*var i = 0;

const call = new XMLHttpRequest();
call.open('GET', '../data/banner.json', true);
call.send();
call.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        $('#next').click(() => {
            i++;
            if (i < 3) {
                $('#SliderImage')[0].img = images[i].url
            }
        })
    }
}*/
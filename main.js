
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DICR5a2gO/', modelReady);

}

function  modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'I can hear - '+
        (results[0].confidence*100).toFixed(1) + " %";
        document.getElementById("result_label").style.color = 'rgb('
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = 'rgb('
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Cat Hissing');
        img1 = document.getElementById('Human Brawl');
        img2 = document.getElementById('Car Honking');
        img3 = document.getElementById('Dog Barking');
        img4 = document.getElementById('Background Noise');

        if (results[0].label == "Cat Hissing") {
         img.src = 'Cat_hissing.gif';   
         img1.src = 'Brawl_humans.png';  
         img2.src = 'Car_honking.png';  
         img3.src = 'Dog_barking.png';
         img4.src = 'Background_noise.png';  
          }else if(results[0].label == "Human Brawl"){
         img.src = 'Cat_hissing.png';   
         img1.src = 'Brawl_humans.gif';  
         img2.src = 'Car_honking.png';  
         img3.src = 'Dog_barking.png';
         img4.src = 'Background_noise.png';
          }else if(results[0].label == "Car Honking"){
            img.src = 'Cat_hissing.png';   
            img1.src = 'Brawl_humans.png';  
            img2.src = 'Car_honking.gif';  
            img3.src = 'Dog_barking.png';
            img4.src = 'Background_noise.png';
         }else if(results[0].label == "Dog Barking"){
            img.src = 'Cat_hissing.png';   
            img1.src = 'Brawl_humans.png';  
            img2.src = 'Car_honking.png';  
            img3.src = 'Dog_barking.gif';
            img4.src = 'Background_noise.png';
        } else(results[0].label == "Background Noise");
            img.src = 'Cat_hissing.png';   
            img1.src = 'Brawl_humans.png';  
            img2.src = 'Car_honking.png';  
            img3.src = 'Dog_barking.png';
            img4.src = 'Background_noise.gif';
        }
    } 



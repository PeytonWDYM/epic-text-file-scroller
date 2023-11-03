const scrollText = document.getElementById("scroll-text")
const scrollContainer = document.getElementById("scroll-container")

let scrollCount = 0

let bufferText = ""

let newText = ""

function getAlertText() {
    fetch("example.txt")
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        newText = data
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
}
getAlertText()


function scrollTextg(){
    scrollContainer.style.display = "block";
    $(scrollText)
    .bind('finished', function() {
        if (scrollCount < 3) {
            scrollCount++;
            console.log("scroll count:" + scrollCount)
        } else {
            scrollContainer.style.display = "none"
            $(this).marquee('pause')
            
        }
    })
    .marquee({
        speed:150,
    })
}

setTimeout(() => {
    scrollText.innerHTML = newText;
    scrollTextg()
}, 500)

// repeating function to continuously get the current txt file

function loopGetTxt(){
    setInterval(() => {
        fetch("example.txt")
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
          })
          .then(data => {
            bufferText = data

            if (bufferText !== newText) {
                newText = bufferText
                scrollCount = 0
                scrollText.innerHTML = newText;
                scrollTextg()
            }
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
    }, 1000)
}

loopGetTxt()



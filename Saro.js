

const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.onclick = () => {
            nav.classList.add('active');
        };
    }

    if (close) {
        close.onclick = () => {
            nav.classList.remove('active');
        };
    }

    

    fetch("https://formspree.io/f/mblgpoez", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "user@example.com",
          
        })
      })
      .then(response => response.json())
      .then(data => console.log(data));
const username = document.getElementById('fullname');
const email = document.getElementById('emailId');
const message = document.getElementById('msg');
const info = document.querySelector('.info');
const sendMsg= document.querySelector('#form');

sendMsg.addEventListener('submit', async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/v1/message', {
            username: username.value,
            email: email.value,
            message: message.value
        })
        if(response){
            info.style.display = 'block';
            info.innerHTML = `<em>Mail has been sent successfully!!</em>`
            username.value = "";
            email.value = "";
            message.value = "";
        } 
        
        setTimeout(() => {
            info.style.display = 'none';
            info.innerHTML = "";
        }, 2500);

    } catch (error) {
        info.style.display = 'block';
        info.innerHTML = `<em>Something went wrong. ${error.response.data.info}</em>`
        setTimeout(() => {
            info.style.display = 'none';
            info.innerHTML = "";
        }, 2500);
    }
 
})


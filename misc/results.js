const result = document.querySelector('.result')

const fetchPeople = async () => {
    try { 
        const { data } = await axios.get('/api/people')
        const people = data.data.map((person) => {
            return `<h5>${person.name}</h5>`
        })

        result.innerHTML = people.join('')
    } catch (err) {
        result.innerHTML = `<div class='alert alert-danger>Can't fetch data</div>`
    }
}

fetchPeople()

const btn       = document.querySelector('.submit-btn'),
      input     = document.querySelector('.form-inp9ut'),
      formAlert = document.querySelector('.form-alert')
     
btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const nameValue = input.value

    try {
        const { data } = await axios.post('/api/people', { name: nameValue })
        const h5 = document.createElement('h5')
        h5.textContent = data.person;

        result.appendChild(h5)
    } catch (err) {
        formAlert.textContent = err.response.data.message
    }

    input.value = ''
})
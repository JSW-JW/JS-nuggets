const state = {
    loading: true,
    name: '',
    job: '' 
}

function updateState(key, value) {
    state[key] = value;
}

updateState('name', 'updated_name');
console.log(state);
updateState('loading', 'false');
console.log(state);
updateState('name', 1);
console.log(state);
updateState('new-key', 'new-value');
console.log(state);
// for(let item in state) console.log(item);
Object.entries(state).forEach(([key, value]) => {
	console.log(key, value);
});
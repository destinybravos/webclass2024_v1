// Get Movie ID from URL
let url = new URL(location.href);
console.log(url.searchParams.get('id'));


const menus = [
    {
      'name': 'burger',
      'category': 'lunch'
    },
    {
    'name': 'bacon',
    'category': 'breakfast',
    },
    {
      'name': 'eggs',
      'category': 'breakfast'
    },
    {
      'name': 'pasta',
      'category': 'dinner',
    },
  ];
  
  const items = new Set(menus.map(item => item.category == 'lunch'? item.category: item.name));
  console.log(items);

  const categories = [...new Set(menus.map(item => item.category))]
  console.log(categories);
  
//   const result = document.querySelector('.result');
//   result.innerHTML = categories.map((category) => {
//     return `<h1>${category}</h1>`
//   })
//   .join('');
// https://bundlephobia.com/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators
// const cats = ['https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg', 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg', 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', 'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8', 'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all', 'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg', 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg', 'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU'];

// const list = document.querySelector('.js-list');

// const markup = cats.map(url => `<div><img src="${url}" loading="lazy" alt="cat" width="300"> <p>
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam aperiam quam facere rem repudiandae tempora a nihil vitae saepe voluptatum est, esse alias quisquam possimus inventore totam ratione laudantium?</p></div>`);
// list.innerHTML = markup.join('')


// document.addEventListener('scroll', _.throttle(onScroll, 1000, {
//     leading: false,
//     trailing: false
// }))
// let counter = 0;

// function onScroll(evt) {
//     counter += 1;
//     console.log(counter);
// }
// console.log(_.add);
// console.log(basicLightbox);
// console.log(simpleLightbox);



// ПЕРЕРВА ДО 20.50
const helloWorld = 15

try{
    console.log(helloWorld);
    if(helloWorld> 15){
        throw helloWorld
    }
    console.log(helloWorld + 100500);
}catch(err){
    console.error(err);
}finally{
    console.log('finally');
}

console.log('after');

// const input = document.querySelector('.js-input');
// input.addEventListener('input', _.debounce(onSearch, 300, {
//     leading: false,
//     trailing: true
// }));

// function onSearch(evt) {
//     console.log(evt.target.value);
//     // console.log(evt.currentTarget.value);
// }
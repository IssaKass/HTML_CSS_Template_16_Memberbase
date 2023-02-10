const Resources = [
  {
    image: 1,
    author: "Nikolai Bain",
    title: "Grids & Alignment",
    description:
      "Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.",
  },
  {
    image: 2,
    author: "Maxwell Milton",
    title: "Remote Work for Design Teams",
    description:
      "Repudiandae asperiores excepturi repellat minus id et. Saepe molestiae accusantium fugit et aut. Reicie",
  },
  {
    image: 3,
    author: "Franko Realguy",
    title: "Design Systems in Product Teams",
    description:
      "Ut libero molestias excepturi veniam et dicta assumenda tenetur voluptatem. Qui dolor officiis eum. Doloribus odit qui quia blanditiis omnis asperiores perspiciatis qui deleniti.",
  },
  {
    image: 4,
    author: "Nikolai Bain",
    title: "All in One Color Handbook",
    description:
      "Vel esse et temporibus inventore alias assumenda. Repellat sit accusamus id sed est animi vel. Odit non ut reprehenderit consequatur sit aliquam. Aut aliquid consequatur",
  },
  {
    image: 5,
    author: "Tim Tommons",
    title: "Digital Wellbeing and Support",
    description:
      "Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus. Reiciendis recusandae minima quod qui. Eum dicta et nihil ad et nam. Vitae et itaque porro. Ipsa distinctio laboriosam veritatis. Minus quia eos ut.",
  },
];

const layout = (res) => `
  <div class="image">
    <img src="assets/resource${res.image}.svg" alt="" />
  </div>
  <div class="data">
    <h4 class="author">By ${res.author}</h4>
    <h3 class="title">${res.title}</h3>
    <p class="desc">${res.description}</p>
  </div>
`;

const containers = document.querySelectorAll(".resources");

Resources.forEach((res) => {
  containers.forEach((cont) => {
    let item = document.createElement("div");
    item.classList.add("resource");
    item.innerHTML = layout(res);
    cont.appendChild(item);
  });
});

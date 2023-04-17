let box =document.createElement("div");
box.classList.add("box");

let row= document.createElement("div");
row.classList.add("row");

let box_top=document.createElement("div");
box_top.classList.add("col-12");

let box_left=document.createElement("div");
box_left.classList.add("col-4");

let box_middle=document.createElement("div");
box_middle.classList.add("col-4");

let box_right=document.createElement("div");
box_right.classList.add("col-4");

let in_col =document.createElement("div");
in_col.classList.add("in-col");

let in_col2 =document.createElement("div");
in_col2.classList.add("in-col");

let in_col3 =document.createElement("div");
in_col3.classList.add("in-col");

let left_h3 =document.createElement("h3");
left_h3.classList.add("h3");
left_h3.textContent="Lorem Ipsum";

let middle_h3 =document.createElement("h3");
middle_h3.classList.add("h3");
middle_h3.textContent="Lorem Ipsum";

let right_h3 =document.createElement("h3");
right_h3.classList.add("h3");
right_h3.textContent="Lorem Ipsum";

let left_p =document.createElement("p");
left_p.classList.add("p");
left_p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit consequatur provident dolorem nemo! Inventore!";

let middle_p =document.createElement("p");
middle_p.classList.add("p");
middle_p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit consequatur provident dolorem nemo! Inventore!";

let right_p =document.createElement("p");
right_p.classList.add("p");
right_p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit consequatur provident dolorem nemo! Inventore!";

let left_a =document.createElement("a");
left_a.classList.add("a");
left_a.textContent="Read more";
left_a.setAttribute("href","")

let middle_a =document.createElement("a");
middle_a.classList.add("a");
middle_a.textContent="Read more";
left_a.setAttribute("href","")

let right_a =document.createElement("a");
right_a.classList.add("a");
right_a.textContent="Read more";
left_a.setAttribute("href","")

box_left.append(in_col);
box_middle.append(in_col2);
box_right.append(in_col3);

box_left.append(left_h3);
box_middle.append(middle_h3);
box_right.append(right_h3);

box_left.append(left_p);
box_middle.append(middle_p);
box_right.append(right_p);

box_left.append(left_a);
box_middle.append(middle_a);
box_right.append(right_a);

row.append(box_top);
row.append(box_left);
row.append(box_middle);
row.append(box_right);

box.append(row);
document.body.append(box);
